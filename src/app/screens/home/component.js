import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import Button from '@material-ui/core/Button'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'


const Component = (props) => (
  <Fragment>
    <Grid container spacing={16}>

      <Grid item xs={12}>
        <Paper>
          <Typography>
            Name {props.name} <br/>
            <AccessAlarmIcon /><br/>
          </Typography>

          <div>
            <Input
              value={props.name}
              onChange={event => props.changeName(event.target.value)}
            />
          </div>
          <Button
            onClick={() => props.fetchProfile(props.name)}
          >
            search
          </Button>

          <Typography>
            {JSON.stringify(props.profile, null, 4)}
          </Typography>

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
  profile: PropTypes.object,
  // ducks' actions
  changeName: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
  fetchProfile: PropTypes.func.isRequired,
}


export default Component
