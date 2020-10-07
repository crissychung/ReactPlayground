import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import AddProfile from '../../components/practice/AddProfile'


test('add profile success', async () => {
 
  const { getByText } = render(<AddProfile/>)

  let form = await getByText("Name:")
  expect(form).toBeVisible()

  // Click button
  fireEvent.click(getByText('Submit'))

  // test conditional render upon submit
  const spanmsg = screen.queryByText('span')
  expect(spanmsg).toBeNull()
})
