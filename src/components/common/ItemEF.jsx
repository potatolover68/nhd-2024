import React from 'react';

export function ItemEF(props) {
  const gridBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`;
  
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      backgroundColor: 'transparent',
      backgroundRepeat: 'repeat',
      backgroundPosition: 'center',
      willChange: 'transform',
      backfaceVisibility: 'hidden',
    }}>
      {props.image && (<div
        style={{
          width: '50%',
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          backgroundColor: 'transparent',
          height: '100%',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      ></div>)}
      <div style={{
        width: '50%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2em',
        backgroundColor: 'transparent',
        color: '#fff',
        willChange: 'transform',
        backfaceVisibility: 'hidden',
      }}>
        <div style={{
          maxWidth: '50em',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}>
          {React.Children.map(props.children, child => {
            if (child.type === 'h1') {
              return React.cloneElement(child, {
                style: {
                  margin: 0,
                  fontFamily: '"Nunito Sans", sans-serif',
                  fontWeight: 1000,
                  fontVariationSettings: '"wdth" 125',
                  fontSize: '2em',
                  willChange: 'transform',
                  backfaceVisibility: 'hidden',
                }
              });
            }
            if (child.type === 'p') {
              return React.cloneElement(child, {
                style: {
                  fontSize: '1.1em',
                  lineHeight: '1.6',
                  marginTop: '1em',
                  color: '#e0e0e0'
                }
              });
            }
            return child;
          })}
        </div>
      </div>
    </div>
  );
}
