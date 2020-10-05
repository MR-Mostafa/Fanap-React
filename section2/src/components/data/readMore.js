import React from 'react';
import moment from 'moment';
import {Grid, Button, CardMedia, Typography, Box } from '@material-ui/core';

export function ReadMore(props) {
    const {id, title, author, created, description, body, cover} = props.moreData;
    const {...classes} = props.classes;

    return (
      <Grid item md={12} component='article'>
            {/* header tag */}
            <Box component='header'>
              <Typography variant='h5' className={classes.textGrey800} component='h1' gutterBottom>
                {title}
              </Typography>
              <Box component="span" display="block"  className={classes.spanPaddingBottomHeader}>
                {`by: ${author}`}
              </Box>
              <Box component="span" display="block" className={classes.colorTextSecondary}>
                {`date: ${moment(created).format('dddd, MMMM Do YYYY')}`}
              </Box>
            </Box>
						
            {/* cover */}
						<CardMedia
							className={classes.cardMediaMorePage}
							image={`./postImages/${cover}`}
							title={`${title.slice(0, 30)}...`}
						/>

            {/* description */}
            <Typography variant='body1' component='p' gutterBottom>
              {description}
            </Typography>

            <Typography variant='body2' color='textSecondary' component='p' paragraph>
              {body}
            </Typography>

            {/* Button */}
            <Button
              size='medium'
              color='primary'
              variant="contained"
              href={`#post-${id}`}
              onClick={()=> props.handleShowMoreData({})}
            >
                BACK TO LIST
            </Button>
				</Grid>
    );
  }
