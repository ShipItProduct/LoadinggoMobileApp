import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const StatusBadge = ({ tag }) => {

    return (
        tag === 'Active' ? (
            <View style={styles.active} >
                <Text style={{ color: 'white' }} >ACTIVE</Text>
            </View>
        ) : (
            tag === 'Pending' ? (
                <View style={styles.pending} >
                    <Text style={{ color: 'white' }} >PENDING</Text>
                </View>
            ) : (
                tag === 'Waiting' ? (
                    <View style={styles.waiting} >
                        <Text style={{ color: 'white' }} >WAITING</Text>
                    </View>
                ) : (
                    tag === 'Completed' ? (
                        <View style={styles.completed} >
                            <Text style={{ color: 'white' }} >COMPLETED</Text>
                        </View>
                    ) : (
                        (tag === 'Closed' || tag === 'close')  ? (
                            <View style={styles.closed} >
                                <Text style={{ color: 'white' }} >CLOSED</Text>
                            </View>
                        ) : (
                            tag === 'On Hold' ? (
                                <View style={styles.onHold} >
                                    <Text style={{ color: 'white' }} >ON HOLD</Text>
                                </View>
                            ):(tag==='Cancel' ? (
                                <View style={styles.cancel} >
                                <Text style={{ color: 'white' }} >CANCELLED</Text>
                            </View>
                            ) : (
                                <View style={styles.open} >
                                    <Text style={{ color: 'white' }} >OPEN</Text>
                                </View>
                            )
                            )

                        )
                    )
                )
            )
        )
    )
}





const styles = StyleSheet.create({
    active: {
        backgroundColor: '#48f718',
        borderRadius: 5,
        padding: 4
    },
    pending: {
        backgroundColor: '#f7e118',
        borderRadius: 5,
        padding: 4
    },
    waiting: {
        backgroundColor: '#1848f7',
        borderRadius: 5,
        padding: 4
    },
    completed: {
        backgroundColor: '#3aacc9',
        borderRadius: 5,
        padding: 4
    },
    closed: {
        backgroundColor: '#ff0000',
        borderRadius: 5,
        padding: 4
    },
    onHold: {
        backgroundColor: '#9400ff',
        borderRadius: 5,
        padding: 4
    },
    open: {
        backgroundColor: '#81f981',
        borderRadius: 5,
        padding: 4
    },
    cancel: {
        backgroundColor: '#F53131',
        borderRadius: 5,
        padding: 4
    }
})

export default StatusBadge


// Active, pending , waiiting , completed , closed , on hold , open 