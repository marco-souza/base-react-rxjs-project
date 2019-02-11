// import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Input from '@material-ui/core/Input'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm'

import useUser from 'app/ducks/user'


// Define Component
const Component = (props) => {
  console.log(props)
  return (
    <div>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper>
            <Typography>
              Name {props.name} <br/>
              Photo: {props.photo}
              <AccessAlarmIcon /><br/>

              <Input
                onChange={event => props.changeName(event.target.value)}
              />
              <Input
                onChange={event => props.changePhoto(event.target.value)}
              />
            </Typography>
          </Paper>


        </Grid>
      </Grid>
    </div>
  )
}


// Define Props Types
Component.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  changeName: PropTypes.func.isRequired,
  changePhoto: PropTypes.func.isRequired,
}


export default useUser(Component)
