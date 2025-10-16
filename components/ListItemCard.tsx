import { Paper, Group, Text, ActionIcon } from "@mantine/core"
import { IconRss, IconDotsVertical, IconGripVertical, IconChevronRight } from "@tabler/icons-react"

export const ListItemCard = () => {
  return (
    <Paper
      radius="md"
      withBorder
      px="md"
      py="sm"
      shadow="xs"
    >
      <Group align="center" justify="space-between">
        <Group align="center">
          <ActionIcon variant="subtle" color="gray">
            <IconGripVertical size={18} color="gray" />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray">
            <IconChevronRight size={18} color="gray" />
          </ActionIcon>
          <Text fw={600}>Friends 1</Text>
        </Group>
        <Group>
          <ActionIcon variant="subtle" color="gray">
            <IconRss size={18} />
          </ActionIcon>
          <ActionIcon variant="subtle" color="gray">
            <IconDotsVertical size={18} />
          </ActionIcon>
        </Group>
      </Group>
    </Paper>
  )
}