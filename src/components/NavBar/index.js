// Write your code here.

import "./index.css";
import { Component } from "react";
import Swal from "sweetalert2";

class NavBar extends Component {
  /* gets top score and current score from EmojiGame page */
  /* isGameEnd is used decide whether display navbar score card or not  */
  renderScores = () => {
    const { currentScore, topScore, isGameEnd } = this.props;
    if (isGameEnd) {
      return null;
    }
    return (
      <div className="Score-container">
        <p className="score-label">
          Score : <span className="score-value">{currentScore}</span>
        </p>
        <p className="score-label">
          Total Score : <span className="score-value">{topScore}</span>
        </p>
      </div>
    );
  };

  onClickDescription = () => {
    Swal.fire("Select unique emojis without repeating any to win the game!");
  };

  render() {
    return (
      <div className="navbar-container">
        <div className="logo-title-container">
          <img
            className="logo-image"
            src="https://img.freepik.com/premium-vector/vector-flat-icon-minimalistic-modern-logo-design-product-selling-company_176841-4473.jpg?w=740"
            alt="logo"
          />
          <button
            className="desc-button"
            type="button"
            onClick={this.onClickDescription}
          >
            <p className="logo-title">Matching Game</p>
          </button>
        </div>
        {this.renderScores()}
      </div>
    );
  }
}

export default NavBar;
