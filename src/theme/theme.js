import {createMuiTheme} from '@material-ui/core/styles';

export const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#fead8c',
            main: '#c87d5e',
            dark: '#945034',
            contrastText: '#ffffff'
        },
        secondary: {
            light: '#dd3333',
            main: '#d50000',
            dark: '#950000',
            contrastText: '#ffffff'
        }
    }
})