import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  checkbox: {
    cursor: 'pointer'
  },
  price: {
    backgroundColor: 'cornflowerblue',
    textShadow: '0 0 1px'
  },
  basicData: {
    marginLeft: 10
  },
  icon: {
    color: '#5F5',
    backgroundColor: '#000',
    borderRadius: '50%'
  },
  itemDescription: {
    maxWidth: 300,
    marginLeft: 20,
    marginBottom: 20,
    fontSize: 15,
    padding: 5,
    backgroundColor: 'rgba(0, 0, 150, 0.3)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  itemImage: {
    display: 'inline-block',
    width: '50%',
    borderWidth: 0.2,
    boxShadow: '0 0 5px',
    marginLeft: 30,
    marginBottom: 30
  }
});
