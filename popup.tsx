import { Button, Group, Stack, Text, TextInput } from "@mantine/core"
import { useState } from "react";
import "@mantine/core/styles.css";
import { ThemeProvider } from "~theme";


function ListEnterItem({ isEnteringName, setIsEnteringListName, setData, data }) {
  const handleCreateClick = () => setIsEnteringListName(true)
  const handleCancelClick = () => setIsEnteringListName(false)

  if (!isEnteringName) {
    return (
      <Button onClick={handleCreateClick} fullWidth>
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
      <Button>Create</Button>
      <Button
        onClick={handleCancelClick}
        variant="outline"
        color="gray">Cancel</Button>
    </Group>
  )
}


function IndexPopup() {
  const [data, setData] = useState("")
  const [isEnteringListName, setIsEnteringListName] = useState(false)

  return (
    <ThemeProvider>
      <Stack miw={540} p="lg">
        <Text fw="bold" size="xl">
          FeedBuilder
        </Text>
        <ListEnterItem
          setIsEnteringListName={setIsEnteringListName}
          isEnteringName={isEnteringListName}
          setData={setData}
          data={data}
        >
        </ListEnterItem>
      </Stack>
    </ThemeProvider>
  )
}

export default IndexPopup
