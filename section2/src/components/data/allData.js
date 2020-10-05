import React from 'react';
import moment from 'moment';
import { Grid, Card, Button, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography, Box } from '@material-ui/core';


export default function AllData(props) {
	return (
		<Grid container spacing={3}>
			{props.data.map((item) => (
				<Grid item key={item.id} xs={12} sm={6} md={4} component='section' id={`post-${item.id}`}>
					<Card className={props.classes.card}>
						{/* header */}
						<CardHeader
							avatar={
								<Avatar aria-label='recipe' title={item.author} component='span'>
									{item.author.slice(0, 1).toUpperCase()}
								</Avatar>
							}
							className={props.classes.cardTitle}
							component='header'
							title={
								<Typography variant='body2' color='textPrimary' component='h2' className={props.classes.bold}>
									{item.title.length > 50
									? `${item.title.slice(0, 50)}...`
									: item.title}
								</Typography>
							}
							subheader={
								<Box component='time' dateTime={item.created}>
									{moment(item.created).format('dddd, MMMM Do YYYY')}
								</Box>
							}
						/>

						<Box component='main' className={props.classes.cardContent}>
							{/* cover */}
							<CardMedia
								className={props.classes.cardMedia}
								image={`./postImages/${item.cover}`}
								title={`${item.title.slice(0, 30)}...`}
							/>

							{/* short description */}
							<CardContent>
								<Typography variant='body2' color='textSecondary' component='p'>
									{item.description}
								</Typography>
							</CardContent>
						</Box>

						{/* footer */}
						<Box component='footer'>
							<CardActions disableSpacing>
								<Button size='medium' className={props.classes.buttonColor}
									onClick={()=> props.handleShowMoreData(item)}
									href='#'
								>
									READ MORE
								</Button>
							</CardActions>
						</Box>
					</Card>


				</Grid>
			))}
		</Grid>
	);
}
