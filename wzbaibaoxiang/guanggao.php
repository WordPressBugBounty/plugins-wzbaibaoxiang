<style>
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
	.layui-btn {
	    background-color: #007DDB;
	}
	.layui-form-onswitch {
	    border-color: #007DDB;
        background-color: #007DDB;
	}
	.websitebox_ggstyle .websitebox_wystyle1 {
	    text-align: center;
	}
	.websitebox_eva_upload {
	    float: left;
	    padding-bottom: 15px;
	}
	.websitebox_eva_upload input {
	    border-radius: 0px;
	    box-sizing: border-box;
	    padding: 0 5px;
	}
	.websitebox_eva_upload + .websitebox_eva_upload {
	    margin-left: 30px;
	}
	.websitebox_eva_upload:nth-child(5n + 1) {
	    margin-left: 0;
	}
	.websitebox_eva_add {
	    padding-left: 120px;
	}
	.layui-upload {
	    overflow: hidden;
	}
	#eva_remove {
	    cursor: pointer;
	    user-select: none;
	}
</style>

<div class="websitebox_box">
    
    <div class="websitebox_news">
		<ul>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>常规设置</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=11&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>WP优化</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=1&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>侧边客服</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=9&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" ><li>手机客服</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=3&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>留言板</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=4&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>网站背景</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=5&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>提示框</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=6&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>滚动公告</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=7&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>图片水印</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=8&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>三合一</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=10&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>"><li>鼠标特效</li></a>
			<a href="<?php echo esc_url(admin_url( 'admin.php?page=websitebox&book=13&nonce='.esc_attr(wp_create_nonce('websitebox')))); ?>" class="websitebox_adm"><li>广告</li></a>
		</ul>
	</div>
    
    <div class="websitebox_centen">
	    <form class="layui-form" action="" lay-filter="example">
    		<div class="websitebox_cenh3">
    			<span>广告</span>
    			<input type="hidden" name="websitebox" value="13">
    		  	<input type="hidden" name="action" value="websitebox">
    		  	<input type="hidden" name="nonce" value="<?php echo esc_attr(wp_create_nonce('websitebox'));?>">
    			<button type="submit" class="layui-btn websitebox_bot" lay-submit="" lay-filter="demo1">保存设置</button>
    		</div>
    		
        	
        	<div class="websitebox_wystyle">
				<div class="layui-form-item websitebox_ggstyle" pane="">
				    <div class="websitebox_wystyle1">
						<span>左</span>
					</div>
				    <div class="layui-input-block">
    				   <?php
    				      if(isset($websitebox_guanggao['left']) && $websitebox_guanggao['left']==1){
    			           
    			            echo ' <input type="checkbox" name="left" lay-skin="switch" lay-text="开|关" checked>';
    			        }else{
    			           echo ' <input type="checkbox" name="left" lay-skin="switch" lay-text="开|关">'; 
    			        }
    			        ?>
				    </div>
				 </div>
				  
				<div class="websitebox_ggstyle">
				    <div class="websitebox_wystyle1">
						<span>图片</span>
					</div> 
    				<div class="layui-upload left_list">
    				    
    				    <?php if(isset($websitebox_guanggao['left_img']) && !empty($websitebox_guanggao['left_img'])) { ?>
        				    <?php foreach($websitebox_guanggao['left_img'] as $key=>$val) { ?>
        				    <div class="websitebox_eva_upload">
        				       <button type="button" class="layui-btn" data-option='left' id="websitebox_eva_btn">上传图片</button>
            				   <div style="margin-bottom:10px;">
            				     <div 
            				        style="display: inline-block;position: relative;margin-top: 10px;border: 1px solid #ccc;width:180px;height:180px;line-height: 100px;"
            				     >
            					     <img class="layui-upload-img" src="<?php echo $val[1];?>" id="websitebox_eva_img" style="width:180px;">
            				         <p class="delete_pic" data-option="left">
            					        <img src="<?php echo esc_url(plugins_url('images/wzt_chahao.png',__FILE__)); ?>">
            					     </p>
            				     </div>
            				  </div>
            				  <input type="text" name="href" data-option="left" placeholder="请输入跳转链接" value="<?php echo $val[2];?>" style="width:182px" />
        				    </div>
    				    <?php } } ?>
    				</div> 
    				
    				<div class="websitebox_eva_add">
				       <input type="button" class="layui-btn" data-option="left" value="添加更多" />
				    </div>
    		    </div>

    			
    			<div class="layui-form-item websitebox_ggstyle" pane="">
				    <div class="websitebox_wystyle1">
						<span>右</span>
					</div>
				    <div class="layui-input-block">
    				   <?php
    				    if(isset($websitebox_guanggao['right']) && $websitebox_guanggao['right'] == 1){
    			            echo ' <input type="checkbox" name="right" lay-skin="switch" lay-text="开|关" checked>';
    			        }else{
    			           echo ' <input type="checkbox" name="right" lay-skin="switch" lay-text="开|关">'; 
    			        }
    			        ?>
				    </div>
				</div>
				  
				<div class="websitebox_ggstyle">
				    <div class="websitebox_wystyle1">
						<span>图片</span>
					</div> 
    				 <div class="layui-upload right_list">
    				 
    				 <?php if(isset($websitebox_guanggao['right_img']) && !empty($websitebox_guanggao['right_img'])) { ?>     
    				    <?php foreach($websitebox_guanggao['right_img'] as $key=>$val) { ?>
    				    <div class="websitebox_eva_upload">
    				       <button type="button" class="layui-btn" data-option='right' id="websitebox_eva_btn">上传图片</button>
        				   <div style="margin-bottom:10px;">
        				     <div 
        				        style="display: inline-block;position: relative;margin-top: 10px;border: 1px solid #ccc;width:180px;height:180px;line-height: 100px;"
        				     >
        					     <img class="layui-upload-img" src="<?php echo $val[1];?>" id="websitebox_eva_img" style="width:180px;">
        				         <p class="delete_pic" data-option="right">
        					        <img src="<?php echo esc_url(plugins_url('images/wzt_chahao.png',__FILE__)); ?>">
        					     </p>
        				     </div>
        				   </div>
        				   <input type="text" name="href" data-option="right" placeholder="请输入跳转链接" style="width:182px" value="<?php echo $val[2];?>" />
    				    </div>
    				 <?php } } ?>
    				 
    				</div>
    				<div class="websitebox_eva_add">
				       <input type="button" class="layui-btn" data-option="right" value="添加更多" />
				    </div>
    			</div>
    			
			</div>
    	</form>
    </div>
</div>

<script>
    jQuery(document).ready(function($) {
        function getAttr(ele, dataType) {
            return ele.attr(dataType);
        }
        
        $(".websitebox_eva_add input[type='button']").on("click", function() {
            let option = getAttr($(this), 'data-option');
            let str = `
               <div class="websitebox_eva_upload">
    		       <button type="button" class="layui-btn" data-option="${option}" id="websitebox_eva_btn">上传图片</button>
    			   <div style="margin-bottom:10px;">
    			       <div 
    			          style="display: inline-block;position: relative;margin-top: 10px;border: 1px solid #ccc;width:180px;height:180px;line-height: 100px;"
    	    	       >
    			         <img class="layui-upload-img" id="websitebox_eva_img" style="width:180px;">
    		             <p class="delete_pic" data-option="${option}">
    			 	        <img src="<?php echo esc_url(plugins_url('images/wzt_chahao.png',__FILE__)); ?>">
    			 	     </p>
    			       </div>
    			   </div>
    			   <input type="text" name="href" placeholder="请输入跳转链接" data-option="${option}" style="width:182px" />
    		   </div>`;
    		$(this).parent().prev().append(str);
        });
        
        layui.use(['form', 'layedit', 'laydate'], function(){
            var form = layui.form,
                layer = layui.layer,
                rightArray, leftArray;

           <?php if($websitebox_guanggao===false){?>
                rightArray = [];
                leftArray = [];
            <?php } else {?>
                rightArray = JSON.parse(decodeURIComponent("<?php echo urlencode(json_encode($websitebox_guanggao['right_img']));?>"));
                leftArray = JSON.parse(decodeURIComponent("<?php echo urlencode(json_encode($websitebox_guanggao['left_img']));?>"));
            <?php }?>
        	
        	$("body").on("click", ".delete_pic", function() {
        	    let option = getAttr($(this), 'data-option');
        	    let index = $(this).parents(".websitebox_eva_upload").index();
        	    
        	    option == "left" ? leftArray.splice(index, 1) : rightArray.splice(index, 1);
                $(this).parents(".websitebox_eva_upload").remove();
            });
            
            $("body").on("blur", "input[name='href']",function() {
                let index = $(this).parent().index();
                let option = getAttr($(this), 'data-option');
                
                if (option == "left") {
                    let leftArr = leftArray.find(item => item[0] == index);
                    if (leftArr?.length >= 3) {
                        leftArr.pop();
                    }
                    leftArr ? leftArr.push($(this).val()) : leftArray.push([index, $(this).val()]);
                } else {
                    let rightArr = rightArray.find(item => item[0] == index);
                    if (rightArr?.length >= 3) {
                        rightArr.pop();
                    }
                    rightArr ? rightArr.push($(this).val()) : rightArray.push([index, $(this).val()]);
                }
            });
        	
        	$("body").on("click", "#websitebox_eva_btn", function() {
                event.preventDefault();   
    			let that = $(this);
    			
    			upload_frame = wp.media({   
    				title: '添加图片',   
    				button: {   
    					text: '选择图片',   
    				},   
    				multiple: false   
    			});   
    			upload_frame.on('select',function(){   
    				attachment = upload_frame.state().get('selection').first().toJSON();
    				
                    that.next().children("div").children("#websitebox_eva_img").attr('src',attachment.url);
                    
                    let index = that.parent().index();
                    if (that.attr("data-option") == "left") {
                        let leftArr = leftArray.find(item => item[0] == index);
                        let leftTemp = [that.parent().index(), attachment.url, ''];
                        
                        if (leftArr?.length >= 3) {
                            leftArr.splice(1, 1)
                        }
                        leftArr ? leftArr.splice(1, 0, attachment.url) : leftArray.push(leftTemp);
                    } else {
                        let rightArr = rightArray.find(item => item[0] == index);
                        let rightTemp = [that.parent().index(), attachment.url, ''];
                        
                        if (rightArr?.length >= 3) {
                            rightArr.splice(1, 1)
                        }
                        rightArr ? rightArr.splice(1, 0, attachment.url) : rightArray.push(rightTemp);
                    }
    			});
    			upload_frame.open();
            });
        	  
        	form.on('submit(demo1)', function(data){
        	   var index = layer.load(1, {
                    shade: [0.7,'#111'] //0.1透明度的白色背景
                });
                
                data.field.left_img = leftArray;
                data.field.right_img = rightArray;
                
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
        	  
        });
    });
</script>

<style>
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
	#wpwrap {
	    background-color: #fff;
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
		  <a href="<?php echo esc_url_raw(admin_url('plugin-install.php?tab=plugin-information&plugin=auto-reply-wechat'));?>" target="_blank">
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
		  <a href="/wp-admin/plugin-install.php?tab=plugin-information&plugin=auto-reply-wechat">
			  <div class="tj_neirong">
				 <img src="<?php echo esc_url(plugins_url('images/weixingzh.jpg',__FILE__)); ?>" class="tj_logo" target="_blank"> 
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