import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import { TableApplet } from '../table-applet'

const TabsComponent = ({ meta, position = 'center' }) => {
    const getContent = (item) => {
        switch (item.type) {
            case 'table':
                return <TableApplet meta={item.meta} />
            case 'component':
                return item.component
            default:
                return null
        }
    }

    return (
        <Tabs
            variant="soft-rounded"
            maxH={1150}
            overflowX="auto"
            overflowY="auto"
            justifySelf="center"
        >
            <TabList gap={15} width="100%" justifyContent={position}>
                {meta.map((item) => (
                    <Tab key={item.id}>{item.title}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {meta.map((item) => (
                    <TabPanel key={item.id}>{getContent(item)}</TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent
