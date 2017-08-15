import * as React from 'react';
import TextField from 'material-ui/TextField';

const HomePage = ({edit, content}) => {
    return (
        <div className='homepage'>
        { edit ? 
            <div className='form'> 
                <img src={content.image} />
                <div>
                    <TextField defaultValue={content.title} />
                </div>
                <div>
                    <TextField
                        defaultValue={content.text}
                        multiLine={true}
                    />
                </div>
                
            </div>
        :
            <div>
                <img src={content.image} />
                <h1>
                    {content.title}
                </h1>
                <div>
                    {content.text}
                </div>
            </div>
        }
        </div>
    )
}

export default HomePage;