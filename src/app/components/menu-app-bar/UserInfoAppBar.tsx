import { ListItem, Typography, ListItemIcon, ListItemText } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useAppThemeContext, useAuthenticationContext } from '../../context';

export const UserInfoAppBar = () => {

    const { userLogged } = useAuthenticationContext();
    const { setThemeName } = useAppThemeContext();

    setThemeName(userLogged?.belt || 'Black');

    return (
        <ListItem alignItems="center">
            <ListItemIcon>
                <AccountCircle  />
            </ListItemIcon>
            <ListItemText
                primary={userLogged?.name}
                secondary={
                    <>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            {"Faixa: "}
                        </Typography>
                        {userLogged?.belt}
                    </>
                }
            />
        </ListItem>
    )
}