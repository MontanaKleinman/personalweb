import React from 'react';

function Footer() {
  return (
    <div id="footer" className="footerBox footerAdjustments">
      <div className="acknowledgement">
        <p>This website was designed and programmed by Montana&nbsp;Kleinman</p>
      </div>
      <p className="footer">
        Icons made by{' '}
        <a
          href="https://www.flaticon.com/authors/freepik"
          title="Freepik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Freepik
        </a>{' '}
        and{' '}
        <a
          href="https://www.iconfinder.com/Erik_Rgnr/families"
          title="Erik"
          target="_blank"
          rel="noopener noreferrer"
        >
          Erik Ragnar Eliasson
        </a>{' '}
        from{' '}
        <a
          href="https://www.flaticon.com/"
          title="Flaticon"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          www.flaticon.com
        </a>{' '}
        and{' '}
        <a
          href="https://www.iconfinder.com"
          title="Iconfinder"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          www.iconfinder.com
        </a>
      </p>
    </div>
  );
}

export default Footer;
