import React from 'react';
export default function Loader({ height=140, radius=18, style={} }){
  return <div className="skeleton" style={{height, borderRadius:radius, ...style}}/>;
}
