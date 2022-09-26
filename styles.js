import { StyleSheet} from 'react-native';



const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: 500,
    backgroundColor: '#d1d8e0',
    borderRadius: 8,
    alignContent: 'center',
  },
 
  titulo: {
    color: '#333',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 50,
    marginBottom: 20,
  },
  contAtrib: {
    flexDirection: 'row',
    width: '80%',
    marginTop: 10,
  },
  hp: {
    width: '42%',
    height: 20,
    marginTop: 3,
    color: '#333',
    fontSize: 17,
    textAlign: 'left',
  },
  bar: {
    width: 130,
    height: 10,
    marginTop: 12,
    borderRadius: 100,
    borderWidth: 1,
    padding: 0,
    color: '#80043c',
    borderColor: '#eee',
    backgroundColor: '#fff',

    // shadowOffset: { width: 0, height: 3 },
    // shadowColor: '#333',
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    // elevation: 3,
  },
  ponto: {
    width: '20%',
    height: 20,
    marginTop: 3,
    color: '#333',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  number: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: -8,
    color: '#FFF',

  },
  nome: {
    fontSize: 55,
    color: '#FFF',
    fontWeight: 'bold',
  },
  fundo: {
    alignItems: 'center',
    width: '100%',
  },
  sombra: {
    shadowOffset: { width: 2, height: 3 },
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 20,
  },

  imgContent: {
    width: '100%',
    height: 150,
    alignItems: 'center',
  },

  img: {
    width: 250,
    height: 250,
    alignItems: 'center',
  },

  bodyContent: {
    width: '100%',
    height: 700,
    alignItems: 'center',
    backgroundColor: '#ce6693',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: -2,
    marginTop: 30,
  },


  //ESTILO DO HOME //ESTILO DO HOME //ESTILO DO HOME
  //ESTILO DO HOME //ESTILO DO HOME //ESTILO DO HOME
  //ESTILO DO HOME //ESTILO DO HOME //ESTILO DO HOME
  //ESTILO DO HOME //ESTILO DO HOME //ESTILO DO HOME

  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  
  card: {
    flex: 1,
  },
  
  image: {
    flex: 1,
    justifyContent: "center"
  },
  
  pokemon: {
    width: '96%',
    height: 100,
    marginHorizontal: 3.5,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  
 
  
  col1: {
    width: '40%',
    height: 100,
    marginTop: 0,

  },
  
  col2: {
    width: '53%',
    height: 100,
    marginLeft: 30,
    
  },
  
  tipo: {
    flexDirection: 'row',
  },

  tipoBloco: {
    width: 65,
    marginRight: 5,
    textAlign: 'center',
    paddingVertical: 1,
    borderRadius: 5,
    fontSize: 10,
    fontWeight: '600',
    marginTop: 5,
    // borderWidth: 1,
    // borderColor: '#555',
  },
  
  numberCard: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 12,
  },

  nomeMini: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'left',
    fontWeight: '700',
    marginTop: -10,

    // textShadowColor: '#000',
    // textShadowOffset: { width: -1, height: 1 },
    // textShadowRadius: 3,
 
  
  },
  imgMini: {
    width: 120,
    height: 120,
    zIndex: 5,
    marginTop: -15,
    marginLeft: 40,
  },


  // HEADER ##############################
  logo: {
    height: 180,
    marginTop: -30,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
    height: 220,
    marginTop: 80,
    width: '100%',
    padding: 8,
    // justifyContent: 'center',
    alignItems: 'center',
  },

  titulo001: {
    fontSize: 40,
    color: '#fdcb6e',
    fontWeight:'bold',
    textAlign: 'center',
  },
  
  grupoBt:{
    width: '100%',
    flexDirection: 'row',
    height: 40,
    marginTop: 0,
    marginLeft: 30,
    //sombra
    shadowOffset: { width: 2, height: 3 },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  p:{
    // borderColor: '#60a3bc',
    // borderWidth: 2,
    width: '77%',
    height: 40,
    borderRadius: 0,
    padding: 5,
    paddingLeft: 15,
    fontSize: 25,
    color: '#666',
    backgroundColor: '#FFF',

    shadowOffset: { width: 2, height: 3 },
    shadowColor: '#111',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 10,
  },

  bt:{
    width: '30%',
    height: 40,
  },


});

export default styles;