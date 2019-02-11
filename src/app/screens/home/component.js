import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'


const Component = (props) => (
  <Fragment>
    <Grid container spacing={24}>

      <Grid item xs={12}>
        <Paper>
          <Typography>
            Name {props.name} <br/>
            Photo: {props.photo}
            <AccessAlarmIcon /><br/>
          </Typography>

          <Input
            onChange={event => props.changeName(event.target.value)}
          />
          <Input
            onChange={event => props.changePhoto(event.target.value)}
          />

        </Paper>
      </Grid>

    </Grid>
  </Fragment>
)


// Define Props Types
Component.propTypes = {
  // ducks' data
  name: PropTypes.string,
  photo: PropTypes.string,
  // ducks' actions
  changeName: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
}


export default Component
