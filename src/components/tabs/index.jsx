import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

const TabsComponent = ({ meta }) => {
    return (
        <Tabs variant="soft-rounded" maxH={1150} overflowX="auto" overflowY="auto">
            <TabList gap={15}>
                {meta.map((item) => (
                    <Tab key={item.id}>{item.title}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {meta.map((item) => (
                    <TabPanel key={item.id}>{item.component}</TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent
