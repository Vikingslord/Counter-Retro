import React,{useState} from 'react';
import { Container, Header, Content,
   Footer, Sidebar, ButtonToolbar, 
   Button, Icon, Alert, Panel } from 'rsuite';

function Home(){

  const app_title = 'Counter';
  const [number,setNumber] = useState(0); //Empty string

  const Increase = () =>{
    setNumber(number + 1)
    Alert.info("Value Increased by 1",800)
  }

  const Reset = () =>{
    setNumber(0)
    Alert.warning("Value reset to 0",800)
  }

  const Decrease = () => {
    setNumber(number - 1)
    Alert.error("Value decreased by 1",800)
  }
  return (

        <section>

            <Container style={{

              textAlign:'center', 
              minHeight:'100vh'
                    
            }}>

          <Header>

            <h2>{app_title}</h2>
            
          </Header>

          <Container>

            <Sidebar style={{paddingTop:'15%',
                paddingLeft:'30%',
                gridRowGap:'50px'}}>

              <div style={{paddingBottom:'20px'}}>

                <ButtonToolbar>
                
                <Button size='lg' color='cyan' onClick={Increase}>
                  <Icon icon='plus'/> Increase
                </Button>

                </ButtonToolbar> {/*Grid automatically */}

              </div>
                
              <div style={{paddingBottom:'20px',
            paddingLeft:'10px'}}>

                <ButtonToolbar>
                
                <Button size='lg' color='orange' onClick={Reset}>
                  <Icon icon='circle-o'/> Reset
                </Button>

                </ButtonToolbar>

              </div>

              <div>

              <ButtonToolbar>
                
                <Button size='lg' color='red' onClick={Decrease}>
                  <Icon icon='minus-square-o'/> Decrease
                </Button>

                </ButtonToolbar>
              </div>

            </Sidebar>

            <Content style={{paddingTop:'8%'}}>
            
            <Panel shaded bordered bodyFill style={{ display: 'inline-block', 
              width: 240}}>
              <img style={{paddingTop:'5px'}} src="https://media.istockphoto.com/vectors/stopwatch-drawing-vector-id509363794?b=1&k=6&m=509363794&s=612x612&w=0&h=-b8Y1XiN0b9CiJf9wIQPxXmS_DYyjz55azwT8KupWkw=" alt='clock' height="240" />
                <Panel header="Counter">

                  <h2>{number}</h2>
              
                </Panel>
            </Panel>

            </Content>

          </Container>

          <Footer style={{

            paddingBottom:'5px'
            
          }}>

          <p style={{letterSpacing:'5px'}}>&copy;Copyright -  

            <a href='https://github.com/Vikingslord' target='_blank' rel='noreferrer'>

              Ahsanul Haque

            </a>

          </p>

          </Footer>

        </Container>
        
        </section>
    )
        }

export default Home;
