import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons'



class ModalVideo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <>
            <div className="row modal-play" onClick={this.toggle}>
              <div className="col-12">
                <div className="play-thumb">
                <FontAwesomeIcon className="play-icon" icon={faPlayCircle} size="3x" />
                </div>
            <p>WHAT IS LEAGUE OF LEGENDS?</p>
            </div>
              </div>


        <Modal className="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody>
          <iframe className="yt-video"src="https://www.youtube.com/embed/p3OzH7rk6Do" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

export default ModalVideo;