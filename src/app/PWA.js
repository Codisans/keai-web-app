'use client'
import { useState, useEffect } from 'react'
import { subscribeUser, unsubscribeUser, sendNotification } from './actions'

export function urlBase64ToUint8Array(base64String) {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding)
        .replace(/\\-/g, '+')
        .replace(/_/g, '/')

    const rawData = window.atob(base64)
    const outputArray = new Uint8Array(rawData.length)

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
}

export function PushNotificationManager() {
    const [isSupported, setIsSupported] = useState(false)
    const [subscription, setSubscription] = useState(null)
    const [message, setMessage] = useState('')

    useEffect(() => {
        if ('serviceWorker' in window.navigator && 'PushManager' in window) {
            setIsSupported(true)
            registerServiceWorker()
        }
    }, [])

    async function registerServiceWorker() {
        const registration = await window.navigator.serviceWorker.register(
            '/sw.js',
            {
                scope: '/',
                updateViaCache: 'none',
            },
        )
        const sub = await registration.pushManager.getSubscription()
        setSubscription(sub)
    }

    async function subscribeToPush() {
        const registration = await window.navigator.serviceWorker.ready
        const sub = await registration.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(
                process?.env?.NEXT_PUBLIC_VAPID_PUBLIC_KEY,
            ),
        })
        setSubscription(sub)
        await subscribeUser(sub)
    }

    async function unsubscribeFromPush() {
        await subscription?.unsubscribe()
        setSubscription(null)
        await unsubscribeUser()
    }

    async function sendTestNotification() {
        if (subscription) {
            await sendNotification(message)
            setMessage('')
        }
    }

    if (!isSupported) {
        return <p>Push notifications are not supported in this browser.</p>
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h3 className="text-h2 pb-4">Push Notifications</h3>
            {subscription ? (
                <>
                    <p>You are subscribed to push notifications.</p>
                    <button
                        className="p-1 bg-black text-white rounded-button"
                        onClick={unsubscribeFromPush}>
                        Unsubscribe
                    </button>
                    <input
                        type="text"
                        placeholder="Enter notification message"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                    />
                    <button
                        className="p-1 bg-black text-white rounded-button"
                        onClick={sendTestNotification}>
                        Send Test
                    </button>
                </>
            ) : (
                <>
                    <p>You are not subscribed to push notifications.</p>
                    <button
                        className="p-1 bg-black text-white rounded-button"
                        onClick={subscribeToPush}>
                        Subscribe
                    </button>
                </>
            )}
        </div>
    )
}

export function InstallPrompt() {
    const [isIOS, setIsIOS] = useState(false)
    const [isStandalone, setIsStandalone] = useState(false)

    useEffect(() => {
        setIsIOS(
            /iPad|iPhone|iPod/.test(window.navigator.userAgent) &&
                !window.windowMSStream,
        )

        setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)
    }, [])

    if (isStandalone) {
        return null // Don't show install button if already installed
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <h3 className="text-h2 pb-4">Install App</h3>
            <button className="p-1 bg-black text-white rounded-button">
                Add to Home Screen
            </button>
            {isIOS && (
                <p>
                    To install this app on your iOS device, tap the share button
                    <span role="img" aria-label="share icon">
                        {' '}
                        ⎋{' '}
                    </span>
                    and then "Add to Home Screen"
                    <span role="img" aria-label="plus icon">
                        {' '}
                        ➕{' '}
                    </span>
                    .
                </p>
            )}
        </div>
    )
}
