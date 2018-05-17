import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon} from 'native-base';
import DatePicker from 'react-native-datepicker';

export class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      date:'1996-10-15',
      gender:'male',
      marital:'married',
    }
  }
  onValueChange1(value) {
    this.setState({
      gender: value
    });
  }
  onValueChange2(value) {
    this.setState({
      marital: value
    });
  }
    render() {
      return (
          <Container>
            <Content>
              <Card>
                <Form>
                  <Item floatingLabel>
                    <Label>Username</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Password</Label>
                      <Input secureTextEntry={true} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Confirm Password</Label>
                      <Input secureTextEntry={true} />
                  </Item>
                  <Item floatingLabel>
                    <Label>Email</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Phone Number</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>KTP Number</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Address</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>KTP Address</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Province</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>City</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Village</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>District</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Postal Code</Label>
                     <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label>Place of Birth</Label>
                     <Input />
                  </Item>
                  <Item>
                  <DatePicker
                      style={{width: 200}}
                      date={this.state.date}
                      mode="date"
                      placeholder="Select Date"
                      format="YYYY-MM-DD"
                      minDate="1960-01-01"
                      maxDate="2000-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 4,
                          marginLeft: 0
                        },
                        dateInput: {
                          marginLeft: 36
                        }
                      }}
                      onDateChange={(date) => {this.setState({date: date})}}
                    />
                  </Item>
                  <Picker
                    mode="dropdown"
                    iosHeader="Gender"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.gender}
                    onValueChange={this.onValueChange1.bind(this)}
                  >
              <Picker.Item label="Male" value="male" />
              <Picker.Item label="Female" value="female" />
            </Picker>
            <Picker
                    mode="dropdown"
                    iosHeader="Marital Status"
                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                    style={{ width: undefined }}
                    selectedValue={this.state.marital}
                    onValueChange={this.onValueChange2.bind(this)}
                  >
              <Picker.Item label="Married" value="married" />
              <Picker.Item label="Not Married" value="notMarried" />
            </Picker>
                </Form>
              </Card>
            </Content>
          </Container>
      );
    }
  }
  export default Register;