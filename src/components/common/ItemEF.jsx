import React from 'react';

export function ItemEF(props) {
  const gridBg = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23171717'%3E%3Cpath d='M0 .5H31.5V32'/%3E%3C/svg%3E")`;
  
  return (
    <div style={{
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
      background: 'transparent',
      backgroundImage: gridBg,
      willChange: 'transform',
      backfaceVisibility: 'hidden',
    }}>
      <div
        style={{
          width: '80%',
          backgroundImage: `url(${props.image})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          height: '100%',
          backgroundColor: 'transparent',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
        }}
      ></div>
      <div style={{
        width: '100vw',
        height: '100vh',
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
            return child;
          })}
        </div>
      </div>
    </div>
  );
}
