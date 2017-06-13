import React from 'react';
import  './index.less';
import { Grid } from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
    icon: 'https://os.alipayobjects.com/rmsportal/IptWdCkrtkAUfjE.png',
    text: `name${i}`,
}));


export default class HotZone extends React.Component{

    render(){

        return(
            <div className="hotRoot">
                <Grid data={data} />
            </div>
        );
    }
}
