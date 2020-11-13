import './common.css';

const Modal = (props) => {
  function closeForm() {
    props.closeModal();
  }
  return (
    <div id="popup" >
      <div class="popupContainer">
        <p>{props.Suggestion}</p>
        <button type="button"  onClick={closeForm}>Close</button>
      </div>
    </div>
  );
} 
  
export default Modal;