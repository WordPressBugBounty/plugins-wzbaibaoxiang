
		<div class="websitebox_box">
		
			<div class="websitebox_news">
				<ul>
					<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>常规设置</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=11&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>WP优化</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=1&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>侧边客服</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=9&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>手机客服</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=3&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>留言板</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=4&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>网站背景</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=5&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" class="websitebox_adm"><li>提示框</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=6&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>滚动公告</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=7&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>图片水印</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=8&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>三合一</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=10&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>鼠标特效</li></a>
        			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=13&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>广告</li></a>
				</ul>
			</div>
			<div class="websitebox_centen">
			    <form class="layui-form" action="" lay-filter="example" onsubmit="return false;">
				<div class="websitebox_cenh3">
					<span>提示框</span>
					<input type="hidden" name="websitebox" value="6">
				  	 <input type="hidden" name="action" value="websitebox">
				  	 <input type="hidden" name="pic" value=" <?php if(isset($websitebox_alert['pic']) && $websitebox_alert['pic']){echo esc_url($websitebox_alert['pic']);}?>">
				  	 <input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('websitebox'));?>">
					 <button type="submit" class="layui-btn websitebox_bot" lay-submit="" lay-filter="demo1">保存设置</button>
				</div>
					<div class="websitebox_wystyle">
						 <div class="layui-form-item websitebox_bor" pane="">
					   <label class="layui-form-label">是否启用</label>
					   <div class="layui-input-block">
					       <?php 
					            if(isset($websitebox_alert['auto']) && $websitebox_alert['auto']==1){
					                echo '<input type="checkbox" name="close" lay-skin="switch" lay-filter="switchtk" lay-text="开|关" checked>';
					            }else{
					                echo '<input type="checkbox" name="close" lay-skin="switch" lay-filter="switchtk" lay-text="开|关">';
					            }
					       ?>
						  <span class="websitebox_zxc">选择是否启用提示框</span>
					   </div>
					 </div>
						 <div class="layui-form-item">
						     <label class="layui-form-label">提示框标题</label>
						     <div class="layui-input-inline">
						       <input type="text" name="title"  placeholder="请输入" autocomplete="off" class="layui-input" value="<?php if(isset($websitebox_alert['title'])){echo esc_attr($websitebox_alert['title']);}?>">
						     </div>
						 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>标题背景颜色</span>
						 	 </div>
						 	  <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" name="bg" placeholder="请选择颜色" class="layui-input" id="test-form-input1" value="<?php if(isset($websitebox_alert['bg']) && $websitebox_alert['bg']){echo esc_attr($websitebox_alert['bg']);}else{echo '#fff';}?>">
                              </div>
                              <div class="layui-inline" style="left: 10px;">
                                <div id="test1"></div>
                              </div>
						 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>标题文字颜色</span>
						 	 </div>
						 	  <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" name="word" placeholder="请选择颜色" class="layui-input" id="test-form-input2" value="<?php if(isset($websitebox_alert['word']) && $websitebox_alert['word']){echo esc_attr($websitebox_alert['word']);}else{echo '#000';}?>">
                              </div>
                              <div class="layui-inline" style="left: 10px;">
                                <div id="test2"></div>
                              </div>
						 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>内容文字颜色</span>
						 	 </div>
						 	 <div class="layui-input-inline" style="width: 120px;">
                                <input type="text" name="content_color" placeholder="请选择颜色" class="layui-input" id="test-form-input3" value="<?php if(isset($websitebox_alert['content_color']) && $websitebox_alert['content_color']){echo esc_attr($websitebox_alert['content_color']);}else{echo '#000';}?>">
                              </div>
                              <div class="layui-inline" style="left: 10px;">
                                <div id="test3"></div>
                              </div>
						 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>提示内容</span>
						 	 </div>
							 <div>
								 <textarea rows="" cols="" class="websitebox_wenben" name="content"><?php if(isset($websitebox_alert['content'])){echo esc_textarea($websitebox_alert['content']);}?></textarea>
							 </div>
						 </div>
						 <div class="websitebox_wystyle">
    					    <div class="websitebox_wystyle1">
						 			<span>图片提示</span>
						 	 </div>
    					    <div >
    					       <?php 
    					            if(isset($websitebox_alert['pic_auto']) && $websitebox_alert['pic_auto']==1){
    					                echo '<input type="checkbox" name="pic_auto" lay-skin="switch" lay-filter="switchtk" lay-text="开|关" checked>';
    					            }else{
    					                echo '<input type="checkbox" name="pic_auto" lay-skin="switch" lay-filter="switchtk" lay-text="开|关">';
    					            }
    					       ?>
    						  <span class="websitebox_zxc">选择是否启用提示图片 <span style="color:red;">注意：当选择开启提示图片时，提示框只会展示图片</span></span>
    					   </div>
    					 </div>
						 <div class="websitebox_wystyle">
						 	 <div class="websitebox_wystyle1">
						 			<span>提示图片</span>
						 	 </div>
							 <div>
								 <button type="button" class="layui-btn" id="test30">提示图片上传</button>
								 <div class="layui-upload-list">
    						       <div style="display: inline-block;position: relative;margin-top: 10px;margin-left: 120px;border: 1px solid #ccc;width: 120px;height: 120px;line-height: 110px;">
            						   <?php 
                					        if(isset($websitebox_alert['pic']) && $websitebox_alert['pic']){
                					            echo '<img class="layui-upload-img" id="demo30" style="width:120px;" src="'.esc_url($websitebox_alert['pic']).'">';
                					        }else{
                					            echo '<img class="layui-upload-img" id="demo30" style="width:120px;" src="'. esc_url(plugins_url('images/wztbbxkf.png',__FILE__)).'">';
                					        }
            					        ?>
            					        <p class="delete_pic">
            					            <img src="<?php echo esc_url(plugins_url('images/wzt_chahao.png',__FILE__)); ?>">
            					        </p>
    						       </div>
    						     <p id="demoText"></p>
    						   </div>
							 </div>
						 </div>
					</div>
				</form>
			</div>
		</div>
		<style>
		*{
			padding: 0;
			margin: 0;
			text-decoration: none;
		}
		.tj_lianjie{
			width:100%;
			margin: 0 auto;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
		}
		.tj_lianjie1 {
		    margin-bottom: 20px;
		}
		.tj_lianjie1 a{
			display: block;
			width:550px;
			border: 1px solid #ccc;
			box-sizing: border-box;
			padding:10px;
			box-shadow: 6px 4px 10px #ccc;
			border-radius: 4px;
		}
		.tj_lianjie1 a>div{
			width:100%;
			display: flex;
			justify-content: space-between;
		}
		.tj_logo{
			width:120px;
			height:120px;
			margin-right:10px;
		}
		.tj_neirong h2{
			font-size:16px;
			line-height:30px;
			color: #000000;
		}
		.tj_neirong  p{
			font-size:12px;
			color: #000000;
		}
		.tj_neirong  span{
			font-size:14px;
			color: #000000;
		}
		.tj_anzhuang{
			width: 120px;
			height: 24px;
			border: 1px solid #ccc;
			text-align: center;
			line-height: 24px;
			border-radius: 3px;		
	    }
		.layui-form-onswitch {
		    border-color: #007DDB;
            background-color: #007DDB;
		}
		#wpwrap {
		    background-color: #fff;
		}
		.layui-btn {
		    background-color: #007DDB;
		}
		.delete_pic {
		    display: inline-block;
            position: absolute;
            top: -13px;
            right: -13px;
            width: 25px;
            height: 25px;
            background-color: #cecece;
            border-radius: 50%;
            opacity: 0.8;
		}
		.delete_pic img {
		    width: 100%;
		}
		.tj_neirong_jimuzhuti {
		    width: 120px;
		    height: 120px;
		    margin-right: 10px;
		    display: flex;
		    flex-shrink: 0;
		    flex-direction: column;
		    justify-content: center;
		    align-items: center;
		    background-image: linear-gradient(90deg, #5540D9 0%, #ee7fff 100%);
		    position: relative;
		    overflow: hidden;
		}
		.tj_neirong_jimuzhuti span {
		    color: #FFF;
		    font-size: 16px;
		    letter-spacing: 2px;
		    font-weight: 600;
		}
		.tj_neirong_jimuzhuti span + span  {
		    margin-top: 10px;
		}
		.tj_lianjie1_free::before {
		    content: "免费";
		    position: absolute;
		    right: -33px;
		    top: 1px;
		    width: 100px;
		    height: 30px;
		    line-height: 30px;
		    text-align: center;
		    color: #FFF;
		    background-color: #CC0033;
		    transform: rotate(45deg);
		}
	</style>

		<div style="width: 1200px;padding: 10px;">
		  <h2 style="line-height: 40px;font-size: 16px;font-weight: 600;">相关推荐</h2>
		  <div class="tj_lianjie">
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=baiduseo'));?>" target="_blank">
				  <div class="tj_neirong">
					 <img src="<?php echo esc_url(plugins_url('images/icon-256x256.png',__FILE__)); ?>" class="tj_logo"> 
					   <div>
						   <h2>百度站长SEO合集</h2>
						   <p>含百度站长、百度地图sitemap、关键词排名查询监控、网站蜘蛛、robots、图片alt标签、天级推送、死链查询、百度自动推送、批量提交URL到站长、百度收录查询、批量推送未收录、301/404等功能。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
				   
			  </a>
		  </div>
		  
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=auto-reply-wechat'));?>" target="_blank">
				  <div class="tj_neirong">
					 <img src="<?php echo esc_url(plugins_url('images/weixingzh.jpg',__FILE__)); ?>" class="tj_logo"> 
					   <div>
						   <h2>公众号自动回复</h2>
						   <p>本插件适用于订阅号（未认证也可以）、服务号。根据关键词自动获取网站相关文章：用户通过公众号发送关键词，公众号即可根据用户的关键词读取wordpress网站内相关的内容，推送URL回复用户。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
		  <div class="tj_lianjie1">
			  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=nleilian-guanjc'));?>" target="_blank">
				  <div class="tj_neirong">
					   <img src="<?php echo esc_url(plugins_url('images/tagneilian.png',__FILE__)); ?>" class="tj_logo"> 
					   <div>
						   <h2>内链tag标签</h2>
						   <p>
						       输入需要匹配所有文章的关键词，添加后，该关键词会将所有wordpress的网站文章关键词加超链，内链。（如果设置URL，则所有文章下的该关键词添加超链（内链）到指定地址。）
						   </p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
		  <div class="tj_lianjie1">
			  <a href="https://www.rbzzz.com/qxcp.html" target="_blank">
				  <div class="tj_neirong">
					   <div class="tj_neirong_jimuzhuti tj_lianjie1_free"><span>积木</span><span>主题</span></div>
					   <div>
						   <h2>积木主题</h2>
						   <p>一款基于wordpress的模块化主题，根据您的喜好来配置网站，他可以是企业官网、博客、商城等多元素化的主题，并且基于SEO严格根据搜索引擎对HTML的标准开发。</p>
						   <span>作者:沃之涛科技</span>
					   </div>
					   <div class="tj_anzhuang">
						   <span>安装</span>
					   </div> 
				  </div>
			  </a>
		  </div>
	  </div>
    </div> 
	<script>
	jQuery(document).ready(function($){
	   
	    $('.delete_pic').click(function(){
            $(this).siblings("img").attr('src','');
            $('input[name="pic"]').val('');
        })
       
	    if($("input[name='close']").attr("checked") == "checked") {
             $("input[name='title']").attr("lay-verify","required")
        }
         
		layui.use(['form', 'layedit', 'laydate','colorpicker'], function(){
		  
		  var form = layui.form
		  ,layer = layui.layer
		  ,colorpicker = layui.colorpicker;
		 
		     colorpicker.render({
                elem: '#test1'
            ,color: '<?php  
                        if(isset($websitebox_alert['bg']) && $websitebox_alert['bg']){
                        echo esc_attr($websitebox_alert['bg']);
                        }else{
                        echo '#fff';
                        } ?>'
            ,done: function(color){
              $('#test-form-input1').val(color);
            }
        });
        $('#test30').click(function(){     
				event.preventDefault();   
				
				upload_frame = wp.media({   
					title: '添加图片',   
					button: {   
						text: '选择图片',   
					},   
					multiple: false   
				});   
				upload_frame.on('select',function(){   
					attachment = upload_frame.state().get('selection').first().toJSON(); 
					
					$('input[name="pic"]').val(attachment.url);   
					$('#demo30').attr('src',attachment.url);
				});	   
				upload_frame.open();   
		  }) 
         colorpicker.render({
                elem: '#test2'
            ,color: '<?php  
                        if(isset($websitebox_alert['word']) && $websitebox_alert['word']){
                        echo esc_attr($websitebox_alert['word']);
                        }else{
                        echo '#000';
                        } ?>'
            ,done: function(color){
              $('#test-form-input2').val(color);
            }
        });
         colorpicker.render({
                elem: '#test3'
            ,color: '<?php  
                        if(isset($websitebox_alert['content_color']) && $websitebox_alert['content_color']){
                        echo esc_attr($websitebox_alert['content_color']);
                        }else{
                        echo '#000';
                        } ?>'
            ,done: function(color){
              $('#test-form-input3').val(color);
            }
        });
       
        //监听指定开关
        form.on('switch(switchtk)', function(data){
            console.log(this.checked)
            if(this.checked) {
                $("input[name='title']").attr("lay-verify","required")
            }else {
                $("input[name='title']").removeAttr("lay-verify")
            }
        });
        form.on('submit(demo1)', function(data){
                var index = layer.load(1, {
                    shade: [0.7,'#111'] //0.1透明度的白色背景
                });
    		  	$.ajax({
    		  		url:'',
    		  		data:{data:JSON.stringify(data.field)},
    		  		type:'post',
    		  		dataType:'json',
    		  		success:function(data){
    		  		    layer.close(index);
    		  			if(data.msg==3){
    		  				layer.confirm('该功能,点击‘确定’后登录官网进行授权', {
    						  btn: ['确定','取消'] //按钮
    						}, function(){
    						  window.location.href='https://www.rbzzz.com/qxcp.html';
    						}, function(){
    					  
    						});
    		  			}else if(data.msg==1){
    		  				layer.alert('保存成功');
    		  			}else{
    		  				layer.msg('保存失败，请刷新后重试');
    		  			}
    		  		}
    		  	})
    		    return false;
    		});
			$(".cenh4>ul>li>a").click(function(){
				$(this).siblings("ul").toggle(500);
			})
		});
	})
	</script>


