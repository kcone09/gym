import { Stack } from "@mui/material"

const Loader = () => {
  return (
    <Stack direction='row' justifyContent='center' alignItems='center' width='100%'>
      <div className="spinner"></div>
    </Stack>
  )
}

export default Loader