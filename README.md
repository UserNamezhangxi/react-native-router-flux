### 使用React-native-router-flux做导航栏 ###

使用`React-native-router-flux`做页面的title导航很方便。

先来个效果图：

![demo](https://i.imgur.com/ylhdIIM.gif)

1. 首先导入React-native-router-flux
	
	`npm install React-native-router-flux --save`

	`import { Router, Scene,Actions } from 'react-native-router-flux';`
2.	创建三个测试页面并导入。

	`import test1 from './testpage1'`

	`import test2 from './testpage2'`

	`import test3 from './testpage3'`
	
	在render方法中将这些需要添加跳转关系的组件进行注册，这点有点像android 的清单文件注册
	
		render() {
		    return (
		        <Router>
		            <Scene key="root">
		                <Scene key="test1" component={test1} title="首页" initial={true}  />
		                <Scene key="test2" component={test2} title="第二页标题"
		                  renderRightButton={this._renderRightButton}
		                />
		                <Scene key="test3" component={test3} title="第三页标题"  />
		            </Scene>
		        </Router>
		    );
	  	}
	在这里使用`_renderRightButton`来进行右侧按钮的渲染，并设置跳转页面到test3。
		 
		_renderRightButton(){
		    return (
		        <TouchableOpacity onPress={Actions.test3}>
		          <Image source={{uri:'setting'}} style={{width:20,height:20,marginRight:16}} />
		        </TouchableOpacity>
		    )
		}
	

	第一个页面

		export default class testpage1 extends Component<Props> {
		    render() {
		        return (
		            <View style={styles.container}>
		                <TouchableOpacity onPress={() => {Actions.test2()}}>
		                    <Text style={styles.welcome}>
		                        点击我进入第二页
		                    </Text>
		                </TouchableOpacity>
		            </View>
		        );
		    }
		}
	注意onPress的写法，如果写成`onPress={Actions.test2()}`,则进入该页面进行自动跳转，如果不自动跳转，需要这样来写：`onPress={Actions.test2}`，即去掉后面的小括号，或者`onPress={()=>{Actions.test2()}}`。这里大家可以自己尝试。
	
	第二页，因为右上角的点击事件已经在首页的scene 中声明了，所以这里就只进行界面展示：

		export default class testpage2 extends Component<Props> {
		    render() {
		        return (
		            <View style={styles.container}>
		                <Text style={styles.welcome}>
		                    第二页，请点击右上角
		                </Text>
		            </View>
		        );
		    }
		}

	第三页：实现了两种跳转`pop`：回退上一页面，`popTo('test1')`,回到指定页面

		export default class testpage3 extends Component<Props> {
		    render() {
		        return (
		            <View style={styles.container}>
		                <TouchableOpacity onPress={Actions.pop}>     {/*注意这两种写法带来的差异*/}
		                    <Text style={styles.welcome}>
		                        点我返回第二页，我是第二页右上角调出我的
		                    </Text>
		                </TouchableOpacity>
		                <TouchableOpacity onPress={()=>{Actions.popTo('test1')}}>  {/*注意这两种写法带来的差异*/}
		                    <Text style={styles.welcome}>
		                        点我直接返回首页
		                    </Text>
		                </TouchableOpacity>
		            </View>
		        );
		    }
		}

**至于高级用法大家可以在网上参考其他例子，用`react-native-router-flux`也可以实现TAB标签页**

[props 介绍以及高级用法](https://www.cnblogs.com/lemonzwt/p/8182345.html "https://www.cnblogs.com/lemonzwt/p/8182345.html")