import React from 'react';
import styled from 'styled-components';
import styles from './LikeDislike.module.css';

class LikeDislike extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			likes: 100,
			dislikes: 100,
			status: 0 //like : 1, dislike : -1, neutral: 0
		};
	}

	handleClick = e => {
		if (e.target.id === 'btn-like') {
			this.setState(oldState => {
				switch (oldState.status) {
					case 1: //status was liked
						return { likes: oldState.likes - 1, status: 0 };
					case 0:
						return { likes: oldState.likes + 1, status: 1 };
					case -1:
						return {
							likes: oldState.likes + 1,
							dislikes: oldState.dislikes - 1,
							status: 1
						};
					default:
						break;
				}
			});
		} else {
			this.setState(oldState => {
				switch (oldState.status) {
					case -1: //status was liked
						return { dislikes: oldState.dislikes - 1, status: 0 };
					case 0:
						return { dislikes: oldState.dislikes + 1, status: -1 };
					case 1:
						return {
							likes: oldState.likes - 1,
							dislikes: oldState.dislikes + 1,
							status: -1
						};
					default:
						break;
				}
			});
		}
	};
	render() {
		return (
			<div>
				<span
					id="btn-like"
					onClick={this.handleClick}
					className={this.state.status === 1 ? styles.liked : styles.btn}
				>
					Likes | {this.state.likes}
				</span>
				<span
					id="btn-dislike"
					onClick={this.handleClick}
					className={this.state.status === -1 ? styles.liked : styles.btn}
				>
					Dislikes | {this.state.dislikes}
				</span>
			</div>
		);
	}
}

export default LikeDislike;
