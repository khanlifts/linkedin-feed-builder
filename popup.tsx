import { Stack, Text } from "@mantine/core"
import { useState } from "react";
import "@mantine/core/styles.css";
import { ListEnterItem } from "components/ListEnterItem";
import { ListItemCard } from "components/ListItemCard";
import { ThemeProvider } from "~theme";

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
      <Stack miw={450} p="lg">
        <ListItemCard></ListItemCard>
      </Stack>
    </ThemeProvider>
  )
}

export default IndexPopup
