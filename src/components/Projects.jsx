import React from 'react'

const Projects = () => {
  return (
    <div className="Static-div">
        <div>
        <div className="div-spacer"></div>
        <h1 className='page-title'>Projects</h1>
            <div className="Project-list--div">
                <div className="Project-list--div--wrapper">
                    <div className="Project-list--overview">
                        <h2 className='text-project-header'>Snippex</h2>
                        <div className='Project--button'>
                            <a target="_blank" href='https://github.com/genmancoder/snippex'>Github Link</a>                            
                        </div>
                        <div>
                        <p>This tool will let you save your most commonly used snippets or fragments of code from different programming languages.</p>
                        <p>Tech: ReactJS, Redux, Redux-thunk</p>
                        </div>
                        <div>
                            <img src='https://raw.githubusercontent.com/xemacscode/snippex/master/src/images/2020-09-03%2023_29_51-.png' width="350" />
                        </div>
                        
                    </div>

                    <div className="Project-list--overview">
                        <h2 className='text-project-header'>Monstarlab Movies</h2>
                        <div className='Project--button'>
                            <a  target="_blank" href='https://github.com/genmancoder/monstarlabmovies'>Github Link</a>
                            
                        </div>
                        <div>
                        <p>Browse your favorite movies through this tool. You can also add it to your favorite section for easy access.</p>
                        <p>Tech: ReactJS, Redux, Redux-thunk, Axios</p>
                        </div>
                        <div>
                            <img src='https://github.com/genmancoder/monstarlabmovies/raw/master/src/images/monstarlab.png' width="350" />
                        </div>
                        
                    </div>

                    <div className="Project-list--overview">
                        <h2 className='text-project-header'>Amazon Clone</h2>
                        <div className='Project--button'>
                            <a  target="_blank" href='https://github.com/genmancoder/ecommerce-amazon-clone-app'>Github Link</a>
                            
                        </div>
                        <div>
                        <p>[ To Follow ]</p>
                        <p>Tech: ReactJS, Redux, Redux-thunk, Axios</p>
                        </div>
                        <div>
                            <img src='https://github.com/genmancoder/ecommerce-amazon-clone-app/blob/vid-lesson-9/src/images/amaz.png?raw=true' width="350" />
                        </div>
                        
                    </div>

                    <div className="Project-list--overview">
                        <h2 className='text-project-header'>ReactJS Admin Dashboard</h2>
                        <div className='Project--button'>
                            <a target="_blank" href='https://github.com/genmancoder/admindashboard'>Github Link</a>                            
                        </div>
                        <div>
                        <p>Admin Dashboard built with ReactJS, ContextAPI, Tailwind CSS and more.</p>
                        <p>Tech: ReactJS, Context API</p>
                        </div>
                        <div>
                            <img src='https://github.com/genmancoder/admindashboard/raw/master/src/images/dash.png?raw=true' width="350" />
                        </div>
                        
                    </div> 

                    

                </div>

               

            </div>
        </div>
    </div>
  )
}

export default Projects