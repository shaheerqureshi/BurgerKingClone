import React from 'react';
import '../App.css';

const Save = () =>{
    return(
        <div class="save-wrapper">
            <div class="save-left">
                <img class="phone" alt="phone" src="https://cdn.sanity.io/images/czqk28jt/prod_bk/f689a1803f8eb039de1aad18e8f098c55fae575f-600x934.png?w=750&fm=webp&q=40&fit=max"/>
            </div>
            
            <div class="save-right">
                <div class="save-doll">SAVE $$$</div><br></br>
                <div id="doll-Save" class="save-doll">WITH OFFERS ON<br/> DEMAND</div><br/>
                <button id="save-btn" class="nav-btn">App Store</button>
                <button id="save-btn" class="nav-btn">Google Play</button><br/>
                <div class="save-text3">Apple and the Apple logo are trademarks of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc. Google Play is a trademark of Google Inc. Terms apply</div>
            </div>
        </div>
    );
}
export default Save