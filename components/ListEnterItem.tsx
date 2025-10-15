import { Button, Group, useMantineTheme, TextInput } from "@mantine/core"

interface Props {
  isEnteringName: boolean
  setIsEnteringListName: (val: boolean) => void
  setData: (val: string) => void
  data: string
}

export const ListEnterItem = ({ isEnteringName, setIsEnteringListName, setData, data }: Props) => {
  const theme = useMantineTheme();
  const handleOpenInputClick = () => setIsEnteringListName(true)
  const handleCreateClick = () => {
    // Todo: Add logic to create list
    setData("")
    setIsEnteringListName(false)
  }
  const handleCancelClick = () => {
    setData("")
    setIsEnteringListName(false)
  }

  if (!isEnteringName) {
    return (
      <Button onClick={handleOpenInputClick} fullWidth>
        + Create new list
      </Button>
    )
  }
  return (
    <Group>
      <TextInput
        size="md"
        radius="md"
        placeholder="Enter List Name"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
      <Button
        disabled={data.trim().length === 0}
        onClick={handleCreateClick}>
        Create
      </Button>
      <Button
        onClick={handleCancelClick}
        variant="outline"
        color={theme.colors.red[4]}>Cancel
      </Button>
    </Group>
  )
}