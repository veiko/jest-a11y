import { render, screen } from '@testing-library/react'
import React from 'react'
import { toBeAccessibleSlider } from '../to-be-accessible-slider'
import { Slider } from '../examples/Slider'
import { SliderWithoutLeft } from '../examples/SliderWithoutLeft'
import { SliderWithoutUp } from '../examples/SliderWithoutUp'
import { SliderWithoutDown } from '../examples/SliderWithoutDown'
import { SliderWithoutHome } from '../examples/SliderWithoutHome'
import { SliderWithoutEnd } from '../examples/SliderWithoutEnd'

describe('toBeAccessibleSlider', () => {
  it('passes when element is valid', async () => {
    render(<Slider />)

    expect(screen.getByRole('slider')).toBeAccessibleSlider()
  })

  it('fails if the element does not have a role of slider', () => {
    render(<div aria-label="progress" data-testid="an-slider" />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith('element has role slider')
  })

  it('fails if the element is not in the tab sequence', () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={50}
        data-testid="an-slider"
        role="slider"
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith('element is part of tab sequence')
  })

  it('fails if the element does not have an accessible label', () => {
    render(<div aria-label="progress" data-testid="an-slider" />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith('element has role slider')
  })

  it('fails if the element does not have aria-valuemax', () => {
    render(
      <div
        aria-label="progress"
        data-testid="an-slider"
        aria-valuemax={0}
        aria-valuenow={0}
        role="slider"
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if the element does not have aria-valuemin attribute', () => {
    render(
      <div
        aria-label="progress"
        data-testid="an-slider"
        aria-valuemin={0}
        aria-valuenow={0}
        role="slider"
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if the element does not have aria-valuenow', async () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={100}
        aria-valuemin={0}
        data-testid="an-slider"
        role="slider"
        tabIndex={0}
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith('element has valid aria-valuenow')
  })

  it('fails if aria-valuemin is less than aria-valuemax', () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={0}
        aria-valuemin={1}
        aria-valuenow={0}
        data-testid="an-slider"
        role="slider"
        tabIndex={0}
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element has aria-valuemin set to a decimal number less than aria-valuemax',
    )
  })

  it('fails if {arrowright} does not increase the value', () => {
    render(
      <div
        aria-label="progress"
        aria-valuemax={1}
        aria-valuemin={0}
        aria-valuenow={0}
        data-testid="an-slider"
        role="slider"
        tabIndex={0}
      />,
    )

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element increases aria-valuenow when {arrowright} is pressed',
    )
  })

  it('fails if {arrowleft} does not decrease the value', () => {
    render(<SliderWithoutLeft />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element decreases aria-valuenow when {arrowleft} is pressed',
    )
  })

  it('fails if {arrowdown} does not increase the value', () => {
    render(<SliderWithoutDown />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element increases aria-valuenow when {arrowdown} is pressed',
    )
  })

  it('fails if {arrowup} does not decrease the value', () => {
    render(<SliderWithoutUp />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element decreases aria-valuenow when {arrowup} is pressed',
    )
  })

  it('fails if {home} does not set the value to aria-valuemin', () => {
    render(<SliderWithoutHome />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element sets aria-valuenow to aria-valuemin when {home} is pressed',
    )
  })

  it('fails if {end} does not set the value to aria-valuemax', () => {
    render(<SliderWithoutEnd />)

    const slider = screen.getByTestId('an-slider', { suggest: false })
    expect(toBeAccessibleSlider(slider)).toFailWith(
      'element sets aria-valuenow to aria-valuemax when {end} is pressed',
    )
  })
})
