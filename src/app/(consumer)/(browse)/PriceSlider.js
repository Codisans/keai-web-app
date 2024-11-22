'use client'
import { Box, Slider, SliderThumb } from '@mui/material'
import { styled } from '@mui/material/styles'
import PropTypes from 'prop-types'

export const PriceSlider = ({ priceValue, setPriceValue }) => {
    return (
        <div className="w-full text-caps-sm">
            <Box sx={{ width: '100%' }}>
                <CustomSlider
                    slots={{ thumb: SliderThumb }}
                    getAriaLabel={() => 'Rango de precios'}
                    aria-label="Always visible"
                    valueLabelDisplay="on"
                    step={5}
                    valueLabelFormat={value => {
                        if (priceValue[0] === 0 && priceValue[1] === 0)
                            return 'Gratis'
                        if (priceValue[0] === 105 && priceValue[1] === 105)
                            return '$100k+'

                        if (value === 0) return 'Gratis'
                        if (value === 105) return 'Sin limite'

                        return `$${value}k`
                    }}
                    value={priceValue}
                    min={0}
                    max={105}
                    onChange={e => {
                        setPriceValue(e.target.value)
                    }}
                    getAriaValueText={() => {
                        if (priceValue[0] === 0 && priceValue[1] === 0)
                            return 'Gratis'
                        if (priceValue[0] === 105 && priceValue[1] === 105)
                            return '$100k+'

                        const min =
                            priceValue[0] === 0
                                ? 'Gratis'
                                : `$${priceValue[0]}k`
                        const max =
                            priceValue[1] === 105
                                ? '+'
                                : ` - $${priceValue[1]}k`
                        return `${min}${max}`
                    }}
                />
            </Box>
        </div>
    )
}

export const CustomSlider = styled(Slider)(() => ({
    color: '#faac4a',
    height: 3,
    padding: '13px 0',
    '& .MuiSlider-valueLabel': {
        fontSize: 'inherit',
        fontWeight: 'inherit',
        fontFamily: 'inherit',
        top: -6,
        backgroundColor: '#faac4a',
        borderRadius: '0.5rem',
        color: '#2B2B2B',
    },
    '& .MuiSlider-thumb': {
        height: 32,
        width: 32,
        backgroundColor: '#2B2B2B',
        '&:hover': {
            boxShadow: '0 0 0 8px #faac4a4D',
        },
        '& .price-thumb-bar': {
            height: 9,
            width: 1,
            backgroundColor: '#faac4a',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    '& .MuiSlider-track': {
        height: 3,
    },
    '& .MuiSlider-rail': {
        color: '#2B2B2B1A',
        opacity: 1,
        height: 3,
    },
}))

export const CustomSliderThumb = props => {
    const { children, ...other } = props
    return (
        <SliderThumb {...other}>
            {children}
            <span className="Custom-thumb-bar" />
            <span className="price-thumb-bar" />
            <span className="price-thumb-bar" />
        </SliderThumb>
    )
}

CustomSliderThumb.propTypes = {
    children: PropTypes.node,
}
