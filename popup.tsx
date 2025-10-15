import { Stack, Text } from "@mantine/core"
import { useState } from "react";
import "@mantine/core/styles.css";
import { ThemeProvider } from "~theme";
import { ListEnterItem } from "components/ListEnterItem"

function IndexPopup() {
  const [data, setData] = useState("")
  const [isEnteringListName, setIsEnteringListName] = useState(false)

  return (
    <ThemeProvider>
      <Stack miw={450} p="lg">
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
