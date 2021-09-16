import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E8F1F2',
    },
    areaVagas: {
        backgroundColor: '#247BA0',
        marginTop: 15,
    },
    textoVagas: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'justify',
        marginRight: 10,
        marginLeft: 10,
        marginBottom: 5,
        borderStyle: 'dashed',
        borderWidth: 2,
        borderColor: 'white',
        padding: 10,

    },
    titulo: {
        textAlign: 'center',
        fontSize: 30,
        backgroundColor: '#247BA0',
        color: 'white',
        fontWeight: 'bold',
        paddingTop: 35,
        padding: 15,
    },
    tituloVagas: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 10,
        color: '#FFF',
    },
    boxtitulo: {
        backgroundColor: 'white',
        height: 85,
        width: '100%',
        margin: 'auto',
    },
})

export { styles };
