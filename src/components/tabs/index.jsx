import { Tab, TabList, TabPanel, TabPanels, Tabs, Button } from '@chakra-ui/react'
import { TableApplet } from '../table-applet'
import { FormApplet } from '../form/components/index.jsx'

const TabsComponent = ({ meta, handleSubmit, onCancel, control, setValue, errors }) => {
    const handleSubmitFormData = (data) => {
        /*const dataWithoutJoins = Object.fromEntries(
            Object.entries(data).filter(([key]) => typeof data[key] !== 'object')
        )*/
        //onSubmit(dataWithoutJoins)
        //reset()
        //onClose()
        alert('TEST!!!')
    }
    
    const getContent = (item) => {
        switch (item.type) {
            case 'table':
                return <TableApplet meta={item.meta} />
            case 'form':
                return <form onSubmit={handleSubmit(handleSubmitFormData)}>
                    <FormApplet
                        meta={item.meta}
                        control={control}
                        setValue={setValue}
                        errors={errors}
                    />
                    <Button type="submit" colorScheme="teal">
                        Изменить
                    </Button>
                    <Button mr={3} onClick={onCancel} variant="outline" colorScheme="teal">
                        Отмена
                    </Button>
                </form>
            case 'component':
                return item.component
            default:
                return null
        }
    }
    
    return (
        <Tabs variant="soft-rounded" maxH={1150} overflowX="auto" overflowY="auto" isLazy>
            <TabList gap={15}>
                {meta.map((item) => (
                    <Tab key={item.id}>{item.title}</Tab>
                ))}
            </TabList>
            <TabPanels>
                {meta.map((item) => (
                    <TabPanel key={item.id}>
                        {getContent(item)}
                    </TabPanel>
                ))}
            </TabPanels>
        </Tabs>
    )
}

export default TabsComponent
