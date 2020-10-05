import React, { useState } from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import data from './components/data/data.json';
import Header from './components/header';
import AllData, {ReadMore} from './components/data';

const useStyles = makeStyles((theme) => ({
	bold:{
		fontWeight: 'bold',
	},
	cardGrid: {
		paddingTop: theme.spacing(8),
		paddingBottom: theme.spacing(8),
	},
	card: {
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
	},
	cardMedia: {
		paddingTop: '56.25%', // 16:9
	},
	cardTitle: {
		'& .MuiCardHeader-content span:first-child': {
			height: '40px',
			overflow: 'hidden',
		},
	},
	cardContent: {
		flexGrow: 1,
	},
	buttonColor: {
		color: 'rgba(0, 0, 0, 0.6)',

		'&:hover, &:focus' : {
			color: 'rgba(0, 0, 0, 0.65)',
		}
	},
	textGrey800 : {
		color: '#424242'
	},
	cardMediaMorePage: {
		paddingTop: '56.25%', // 16:9
		margin: '0.7rem 0 1rem'
	},
	spanPaddingBottomHeader: {
		paddingBottom: '0.3rem',
		color: 'rgba(0, 0, 0, 0.54)'
	},
	colorTextSecondary: {
		color: 'rgba(0, 0, 0, 0.54)'
	}
}));

export default function Data() {
	const [showMoreData, setshowMoreData] = useState(false);
	const [moreData, setmoreData] = useState(data[0]);

	const handleShowMoreData = (moreData) => {
		setmoreData(moreData);
		setshowMoreData(!showMoreData);
	};

	const classes = useStyles();

	return (
		<>
			<Header title='Learning React' variant='h5' />

			<Container component='main' className={classes.cardGrid} maxWidth='md'>
				{!showMoreData ?
					<AllData
						data={data}
						classes={classes}
						handleShowMoreData={handleShowMoreData}
					/>
				:
					<ReadMore
						data={data}
						classes={classes}
						handleShowMoreData={handleShowMoreData}
						moreData={moreData}
					/>
				}
				
			</Container>
		</>
	);
}
