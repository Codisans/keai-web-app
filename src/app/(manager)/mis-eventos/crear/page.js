'use client'

import { useRouter } from 'next/navigation'
import { useAuth } from '@/hooks/auth'
import { useState, useEffect } from 'react'
import Input from '@/components/atoms/Input'
import InputError from '@/components/atoms/InputError'
import Label from '@/components/atoms/Label'
import { Button } from '@/components/atoms/Button'
import { getCategories } from '@/api/getCategories'
import { getTags } from '@/api/getTags'

const CrearEvento = () => {
    const router = useRouter()
    const [venue_id, setVenue_id] = useState('')
    const [name, setName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [region, setRegion] = useState('')
    const [city, setCity] = useState('')
    const [province, setProvince] = useState('')
    const [street, setStreet] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [link, setLink] = useState('')
    const [tags, setTags] = useState([])
    const [categories, setCategories] = useState([])
    const [cover, setCover] = useState(null)
    const [errors, setErrors] = useState([])
    const [availableTags, setAvailableTags] = useState([])
    const [availableCategories, setAvailableCategories] = useState([])

    const { createEvent } = useAuth({ middleware: 'auth' })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const tagsData = await getTags()
                const categoriesData = await getCategories()
                setAvailableTags(tagsData)
                setAvailableCategories(categoriesData)
            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }
        fetchData()
    }, [])

    const handleFileChange = event => {
        setCover(event.target.files[0])
    }

    const handleTagChange = event => {
        const selectedTags = Array.from(
            event.target.selectedOptions,
            option => option.value,
        )
        setTags(selectedTags)
    }

    const handleCategoryChange = event => {
        const selectedCategories = Array.from(
            event.target.selectedOptions,
            option => option.value,
        )
        setCategories(selectedCategories)
    }

    const submitForm = async event => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('venue_id', venue_id)
        formData.append('name', name)
        formData.append('start_date', startDate)
        formData.append('end_date', endDate)
        formData.append('region', region)
        formData.append('city', city)
        formData.append('province', province)
        formData.append('street', street)
        formData.append('description', description)
        formData.append('price', price)
        formData.append('latitude', latitude)
        formData.append('longitude', longitude)
        formData.append('link', link)
        tags.forEach(tag => formData.append('tags[]', tag))
        categories.forEach(category =>
            formData.append('categories[]', category),
        )
        formData.append('cover', cover)

        try {
            await createEvent({ formData, setErrors })
            router.push('/mis-eventos')
        } catch (error) {
            console.error('Error creating event:', error)
        }
    }

    return (
        <>
            <section className="py-12 px-gutter">
                <h1 className="pb-12 text-h1">Crear nuevo evento</h1>

                <form onSubmit={submitForm} className="space-y-6">
                    <div>
                        <Label htmlFor="venueId">Venue Id</Label>

                        <Input
                            id="venue_id"
                            type="text"
                            value={venue_id}
                            className="block w-full mt-1"
                            onChange={event => setVenue_id(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.venue_id}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="name">Nombre</Label>

                        <Input
                            id="name"
                            type="text"
                            value={name}
                            className="block w-full mt-1"
                            onChange={event => setName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="start_date">start date</Label>

                        <Input
                            id="start_date"
                            type="text"
                            value={startDate}
                            className="block w-full mt-1"
                            onChange={event => setStartDate(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.startDate}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="date">end date</Label>

                        <Input
                            id="end_date"
                            type="text"
                            value={endDate}
                            className="block w-full mt-1"
                            onChange={event => setEndDate(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.endDate}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="region">region</Label>

                        <Input
                            id="region"
                            type="text"
                            value={region}
                            className="block w-full mt-1"
                            onChange={event => setRegion(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.region} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="city">city</Label>

                        <Input
                            id="city"
                            type="text"
                            value={city}
                            className="block w-full mt-1"
                            onChange={event => setCity(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.city} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="province">province</Label>

                        <Input
                            id="province"
                            type="text"
                            value={province}
                            className="block w-full mt-1"
                            onChange={event => setProvince(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.province}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="street">street</Label>

                        <Input
                            id="street"
                            type="text"
                            value={street}
                            className="block w-full mt-1"
                            onChange={event => setStreet(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.street} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="description">description</Label>

                        <Input
                            id="description"
                            type="text"
                            value={description}
                            className="block w-full mt-1"
                            onChange={event =>
                                setDescription(event.target.value)
                            }
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.description}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="price">price</Label>

                        <Input
                            id="price"
                            type="text"
                            value={price}
                            className="block w-full mt-1"
                            onChange={event => setPrice(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.price} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="latitude">latitude</Label>

                        <Input
                            id="latitude"
                            type="text"
                            value={latitude}
                            className="block w-full mt-1"
                            onChange={event => setLatitude(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.latitude}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="longitude">longitude</Label>

                        <Input
                            id="longitude"
                            type="text"
                            value={longitude}
                            className="block w-full mt-1"
                            onChange={event => setLongitude(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError
                            messages={errors.longitude}
                            className="mt-2"
                        />
                    </div>

                    <div>
                        <Label htmlFor="link">link</Label>

                        <Input
                            id="link"
                            type="text"
                            value={link}
                            className="block w-full mt-1"
                            onChange={event => setLink(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.link} className="mt-2" />
                    </div>

                    <div>
                        <Label htmlFor="tags">Tags</Label>
                        <select
                            id="tags"
                            multiple
                            value={tags}
                            className="block w-full mt-1"
                            onChange={handleTagChange}
                            required>
                            {availableTags.map(tag => (
                                <option key={tag.id} value={tag.id}>
                                    {tag.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="categories">Categories</Label>
                        <select
                            id="categories"
                            multiple
                            value={categories}
                            className="block w-full mt-1"
                            onChange={handleCategoryChange}
                            required>
                            {availableCategories.map(category => (
                                <option key={category.id} value={category.id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <Label htmlFor="cover">cover</Label>

                        <Input
                            id="cover"
                            type="file"
                            className="block w-full mt-1"
                            onChange={handleFileChange}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.cover} className="mt-2" />
                    </div>

                    <div className="pt-12">
                        <Button type="submit">Crear</Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default CrearEvento
