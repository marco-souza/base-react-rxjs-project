import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'


// Define Component
const Component = ({ name }) => (
  <div>
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper>
          <Typography>
            Hello {name}
            <AccessAlarmIcon />
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  </div>
)


// Define Props Types
Component.propTypes = {
  name: PropTypes.string.isRequired,
}


export default Component
