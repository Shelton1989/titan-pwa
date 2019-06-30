import {createMuiTheme} from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fead8c',
            main: '#c87d5e',
            dark: '#945034',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#d69075',
            main: '#a26249',
            dark: '#703721',
            contrastText: '#ffffff'
        }
    }
})