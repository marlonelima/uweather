import styled from 'styled-components'

import ImageNext from 'next/image'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #242424;
  position: absolute;
  z-index: 0;
`

export const Image = styled(ImageNext)`
  width: 100vw;
  height: 100vh;
  object-fit: cover;
`
