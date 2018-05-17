import React, { Component } from 'react';
import { Container, Item, Content, Form, Input, Button, Label, Card, CardItem, Body, Text, Picker, Icon, Left, Right} from 'native-base';
import DatePicker from 'react-native-datepicker';
//var ImagePicker = require('react-native-image-picker');
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';


var options = {
    title: 'Pick an Image',
    storageOptions: {
        //skipBackup: true,
        //returnBase64Image: true,
    }
};
export class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            genderOptions:null,
            maritalOptions:null,
            religionOptions:null,
            workOptions:null,
            educationOptions:null,
            salaryRangeOptions:null,
            date:'',
            gender:'',
            marital:'',
            religion:'',
            work:'',
            education:'',
            salary:'',
            username: '',
            password: '',
            confPassword: '',
            email: '',
            phone: '',
            ktp: '',
            address: '',
            ktpAddress: '',
            province: '',
            city: '',
            village: '',
            district: '',
            postalCode: '',
            placeOfBirth: '',
            imageData: null,
            imageUri:null,
            imageFilename:null,
            imagePath: null,
            imageType: null,
            imageOrigUrl: null,
            data: null
        }
        this.pickImageHandler = this.pickImageHandler.bind(this);
        this.imgSalarySubmit = this.imgSalarySubmit.bind(this);
    }
    componentDidMount(){
        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.genderOptions.map((option, i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                genderOptions:options,
            });
        }).catch((error)=>{console.log(error)})

        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.maritalOptions.map((option, i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                maritalOptions:options,
            });
        }).catch((error)=>{console.log(error)})

        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.religionOptions.map((option, i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                religionOptions:options,
            });
        }).catch((error)=>{console.log(error)})

        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.workOptions.map((option,i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                workOptions:options,
            });
        }).catch((error)=>{console.log(error)})

        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.educationOptions.map((option,i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                educationOptions:options,
            });
        }).catch((error)=>{console.log(error)})
        fetch('http://wf.dev.neo-fusion.com/tdfp2p/ws/sys/options', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((results) => results.json()).then((data)=>{
            let options =  data.salaryRangeOptions.map((option,i)=>{
                return(
                    <Picker.Item label={option} value={option} key={i}/>
                );
            });
            this.setState({
                salaryRangeOptions:options,
            });
        }).catch((error)=>{console.log(error)})
    }

    imgSalarySubmit() {
        var data = new FormData();
        data.append('file',
            {
                uri: this.state.imageUri,
                name: this.state.imageFilename,
                type: this.state.imageType}
            );

        const config = {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            timeout: 10000
        }

        axios.post('http://wf.dev.neo-fusion.com/tdfp2p/ws/registration/image', data, config)
            .then(response => {
                console.log(response)
            })
            .catch((error) => {
                console.log("Error " + error)
            })
    }

    pickImageHandler = () => {
        ImagePicker.showImagePicker(options, (response) => {
            if(response.didCancel){
                console.log("User cancelled");
            }
            else if(response.error){
                console.log("Error", response.error);
            }
            else{
                let data = response.data;
                let uri = response.uri;
                let path = response.path;
                let filename = response.fileName;
                let type = response.type;
                let origUrl = response.origURL;

                this.setState({
                    imageData: data,
                    imageFilename: filename,
                    imagePath: path,
                    imageType: type,
                    imageOrigUrl: origUrl,
                    imageUri: uri,
                    imageText: "Add Img Success"
                });
                console.log("imageData:"+this.state.imageData);
                console.log("imageFilename:"+this.state.imageFilename);
                console.log("imageUri:"+this.state.imageUri);
                console.log("imagePath:"+this.state.imagePath);
                console.log("imageType:"+this.state.imageType);
                console.log("imageOrigUrl:"+this.state.imageOrigUrl);
            }
        });
    }

    render() {
        return (
            <Container>
                <Content scrollEnabled contentContainerStyle={{justifyContent: 'center',alignItems: 'center', marginTop:'10%', marginBottom:'10%'}}>
                    <Card style={{width:'80%',height:'auto',paddingTop:'5%',paddingBottom:'10%'}}>
                        <Form>
                            <Item floatingLabel>
                                <Label>Username</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({username: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({password: text})}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Confirm Password</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({confPassword: text})}
                                    secureTextEntry={true}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Email</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({email: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Phone Number</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({phone: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Number</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ktp: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({address: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>KTP Address</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ktpAddress: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Province</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({province: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>City</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({city: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Village</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({village: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>District</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({district: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Postal Code</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({ postalCode: text})}
                                />
                            </Item>

                            <Item floatingLabel>
                                <Label>Place of Birth</Label>
                                <Input
                                    onChangeText={(text)=>this.setState({placeOfBirth: text})}
                                />
                            </Item>

                            <Item>
                                <Left>
                                    <Label>Date of Birth</Label>
                                </Left>
                                <DatePicker
                                    style={{width: 200}}
                                    date={this.state.date}
                                    mode="date"
                                    placeholder="Select Date"
                                    format="YYYY-MM-DD"
                                    minDate="1960-01-01"
                                    maxDate="2018-12-31"
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
                            <CardItem>
                                <Left>
                                    <Label>Gender</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Gender"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.gender}
                                    onValueChange={(value)=>this.setState({gender:value})}
                                >
                                    {this.state.genderOptions}
                                </Picker>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Label>Marital Status</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Marital Status"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.marital}
                                    onValueChange={(value)=>this.setState({marital:value})}
                                >
                                    {this.state.maritalOptions}
                                </Picker>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Label>Religion</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Religion"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.religion}
                                    onValueChange={(value)=>this.setState({religion:value})}
                                >
                                    {this.state.religionOptions}
                                </Picker>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Label>Work</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="Work"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.work}
                                    onValueChange={(value)=>this.setState({work:value})}
                                >
                                    {this.state.workOptions}
                                </Picker>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Label>Education</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="education"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.education}
                                    onValueChange={(value)=>this.setState({education:value})}
                                >
                                    {this.state.educationOptions}
                                </Picker>
                            </CardItem>
                            <CardItem>
                                <Left>
                                    <Label>Salary</Label>
                                </Left>
                                <Picker
                                    mode="dropdown"
                                    iosHeader="salary"
                                    iosIcon={<Icon name="ios-arrow-down-outline" />}
                                    style={{ width: undefined }}
                                    selectedValue={this.state.salary}
                                    onValueChange={(value)=>this.setState({salary:value})}
                                >
                                    {this.state.salaryRangeOptions}
                                </Picker>
                            </CardItem>

                            <Button title = "Pick Image" onPress = {this.pickImageHandler}>
                                <Text> Salary </Text>
                            </Button>

                            <Button title = "Pick Image" onPress = {this.pickImageHandler}>
                                <Text> ktpScan </Text>
                            </Button>

                            <Button title = "Pick Image" onPress = {this.pickImageHandler}>
                                <Text> npwpScan </Text>
                            </Button>

                            <Button title = "Pick Image" onPress = {this.pickImageHandler}>
                                <Text> picture </Text>
                            </Button>


                            <Button  onPress={this.imgSalarySubmit}>
                                <Text>Submit</Text>
                            </Button>

                        </Form>
                    </Card>
                </Content>
            </Container>
        );
    }
}

export default Register;