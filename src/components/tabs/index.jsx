import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'

const TabsComponent = ({ meta }) => {
    return (
        <Tabs>
            <TabList>
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
