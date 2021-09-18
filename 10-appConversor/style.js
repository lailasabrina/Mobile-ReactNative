import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF8E5',
    },
    box: {
        backgroundColor: '#FFB344',
        marginLeft: 15,
        marginRight: 15,
        padding: 15,
        marginBottom: 15,
        borderRadius: 10,
        
    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#00A19D',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 35,
        padding: 15,
        marginBottom: 15,
    },
    texto: {
        fontSize: 25,
        color: '#E05D5D',
        marginTop: 30,
        marginLeft: 15,
        
    },
    texto2: {
        fontSize: 22,
        color: 'white',
        textAlign: 'center',
    },
    msg: {
        textAlign: 'center',
        fontSize: 18,
        color: '#E05D5D',
        marginBottom: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    botao: {
        backgroundColor: '#FFB344',
        borderRadius: 10,
        width: 250,
        height: 55,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 70,
        marginBottom: 20,
    },
    botaotext: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25,
    },
    input:{
        width: '90%',
        height: 45,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 25,
        fontSize: 20,
        padding: 10,
        color: '#E05D5D',
        borderColor: '#FFB344',
        textAlign: 'center',
    },
})

export { styles };
