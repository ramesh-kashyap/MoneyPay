<?php
use App\Models\GeneralSetting;
use App\Models\User;
use App\Models\Income;
use App\Models\Investment;
use Illuminate\Support\Facades\Mail;
use App\Mail\Sendmail;

$downline="";

function siteName()
{
    $general = GeneralSetting::first();
    return $general->sitename;
}

function currency()
{
    $general = GeneralSetting::first();
    return $general->cur_sym;
}

function generalDetail()
{
    $general = GeneralSetting::first();
    return $general;
}

function paginationLimit()
{
    $general = GeneralSetting::first();
    return $general->PaginationLimit;
}


function sendEmail($user, $type = null, $shortCodes = [])
{

  $mail_data=array('subject'=>$type,'MailDetail'=>$shortCodes);
  \Mail::to($user)->send(new Sendmail($mail_data));  
}



//moveable
function getIpInfo()
{
    $ip = null;
    $deep_detect = TRUE;

    if (filter_var($ip, FILTER_VALIDATE_IP) === FALSE) {
        $ip = $_SERVER["REMOTE_ADDR"];
        if ($deep_detect) {
            if (filter_var(@$_SERVER['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            if (filter_var(@$_SERVER['HTTP_CLIENT_IP'], FILTER_VALIDATE_IP))
                $ip = $_SERVER['HTTP_CLIENT_IP'];
        }
    }


    $xml = @simplexml_load_file("http://www.geoplugin.net/xml.gp?ip=" . $ip);


    $country = @$xml->geoplugin_countryName;
    $city = @$xml->geoplugin_city;
    $area = @$xml->geoplugin_areaCode;
    $code = @$xml->geoplugin_countryCode;
    $long = @$xml->geoplugin_longitude;
    $lat = @$xml->geoplugin_latitude;

    $data['country'] = $country;
    $data['city'] = $city;
    $data['area'] = $area;
    $data['code'] = $code;
    $data['long'] = $long;
    $data['lat'] = $lat;
    $data['ip'] = request()->ip();
    $data['time'] = date('d-m-Y h:i:s A');


    return $data;
}

function osBrowser(){
    $user_agent = $_SERVER['HTTP_USER_AGENT'];
    $os_platform = "Unknown OS Platform";
    $os_array = array(
        '/windows nt 10/i' => 'Windows 10',
        '/windows nt 6.3/i' => 'Windows 8.1',
        '/windows nt 6.2/i' => 'Windows 8',
        '/windows nt 6.1/i' => 'Windows 7',
        '/windows nt 6.0/i' => 'Windows Vista',
        '/windows nt 5.2/i' => 'Windows Server 2003/XP x64',
        '/windows nt 5.1/i' => 'Windows XP',
        '/windows xp/i' => 'Windows XP',
        '/windows nt 5.0/i' => 'Windows 2000',
        '/windows me/i' => 'Windows ME',
        '/win98/i' => 'Windows 98',
        '/win95/i' => 'Windows 95',
        '/win16/i' => 'Windows 3.11',
        '/macintosh|mac os x/i' => 'Mac OS X',
        '/mac_powerpc/i' => 'Mac OS 9',
        '/linux/i' => 'Linux',
        '/ubuntu/i' => 'Ubuntu',
        '/iphone/i' => 'iPhone',
        '/ipod/i' => 'iPod',
        '/ipad/i' => 'iPad',
        '/android/i' => 'Android',
        '/blackberry/i' => 'BlackBerry',
        '/webos/i' => 'Mobile'
    );
    foreach ($os_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $os_platform = $value;
        }
    }
    $browser = "Unknown Browser";
    $browser_array = array(
        '/msie/i' => 'Internet Explorer',
        '/firefox/i' => 'Firefox',
        '/safari/i' => 'Safari',
        '/chrome/i' => 'Chrome',
        '/edge/i' => 'Edge',
        '/opera/i' => 'Opera',
        '/netscape/i' => 'Netscape',
        '/maxthon/i' => 'Maxthon',
        '/konqueror/i' => 'Konqueror',
        '/mobile/i' => 'Handheld Browser'
    );
    foreach ($browser_array as $regex => $value) {
        if (preg_match($regex, $user_agent)) {
            $browser = $value;
        }
    }

    $data['os_platform'] = $os_platform;
    $data['browser'] = $browser;

    return $data;
}


function verificationCode($length)
{
    if ($length == 0) return 0;
    $min = pow(10, $length - 1);
    $max = 0;
    while ($length > 0 && $length--) {
        $max = ($max * 10) + 9;
    }
    return random_int($min, $max);
}



 function add_level_income($id,$amt)
        {

          //$user_id =$this->session->userdata('user_id_session')
      $data = User::where('id',$id)->orderBy('id','desc')->first();
      
        $user_id = $data->username;
        $fullname=$data->name;
       
        $rname = $data->username;
        $user_mid = $data->id;
          
     
              $cnt = 1;

              $amount = $amt/100;
                
                while ($user_mid!="" && $user_mid!="1"){
  
                      $Sposnor_id = User::where('id',$user_mid)->orderBy('id','desc')->first();
                      $sponsor=$Sposnor_id->sponsor;
                      if (!empty($sponsor))
                       {
                        $Sposnor_status = User::where('id',$sponsor)->orderBy('id','desc')->first();
                        $Sposnor_cnt = User::where('sponsor',$sponsor)->where('active_status','Active')->count("id");
                      $sp_status=$Sposnor_status->active_status;
                      $total_get = $Sposnor_status->package*5;
                      $total_profit= Income::where('user_id',$Sposnor_status->id)->sum("comm");
                      }
                      else
                      {
                        $Sposnor_status =array();
                        $sp_status="Pending";
                        $Sposnor_cnt=0;
                        $total_get =0;
                        $total_profit= 0;
                      }
                     
                      $pp=0;
                       if($sp_status=="Active")
                       {  
                        if($cnt==1)
                        {
                          $pp = $amount*5;
                        }
                        if($cnt==2)
                        {
                          $pp = $amount*4;
  
                        }
                        if($cnt==3)
                        {
                          $pp = $amount*3;
  
                        }
                        if($cnt==4 )
                        {
                          $pp = $amount*2;
  
                        }
                        if($cnt==5)
                        {
                          $pp = $amount*1;
                        }
                        if($cnt>=6 && $cnt<=16)
                        {
                          $pp = $amount*0.5;
                        }

                        }
                        
                          
                     
                      
                      $user_mid = @$Sposnor_status->id;

                      $spid = @$Sposnor_status->id;

                      $max_income=$total_get;
                      $n_m_t = $max_income - $total_profit;
                      // dd($total_received);
                        if($pp >= $n_m_t)
                        {
                            $pp = $n_m_t;
                        }  

                        
                      $idate = date("Y-m-d");             
                      $user_id_fk=$sponsor;
                      if($spid>0 && $cnt<=16){
                        if($pp>0){
                         
                         $data = [
                        'user_id' => $user_mid,
                        'user_id_fk' =>$Sposnor_status->username,
                        'amt' => $amt,
                        'comm' => $pp,
                        'remarks' =>'Level Income',
                        'level' => $cnt,
                        'rname' => $rname,
                        'fullname' => $fullname,
                        'ttime' => Date("Y-m-d"),
                        
                    ];
                     $user_data =  Income::create($data);
                   
                   
                    
                }
               }
               
                $cnt++;
     }

     return true;
  }



function add_direct_income($id,$amt)
{

  //$user_id =$this->session->userdata('user_id_session')
$data = User::where('id',$id)->orderBy('id','desc')->first();

$user_id = $data->username;
$fullname=$data->name;

$rname = $data->username;
$user_mid = $data->id;
  

      $cnt = 1;

        // $amount = $amt/100;
        $amount=$amt;

              $Sposnor_id = User::where('id',$user_mid)->orderBy('id','desc')->first();
              $sponsor=$Sposnor_id->sponsor;
              if (!empty($sponsor))
               {
                $Sposnor_status = User::where('id',$sponsor)->orderBy('id','desc')->first();
                $sp_status=$Sposnor_status->active_status;
              $Sposnor_cnt = User::where('sponsor',$sponsor)->where('active_status','Active')->count("id");
               $joining_amt=Investment::where('user_id',$Sposnor_status->id)->where('status','Active')->sum("amount");
               $total_get = $joining_amt*5;
               $total_profit= Income::where('user_id',$Sposnor_status->id)->sum("comm");
              }
              else
              {
                $Sposnor_status =array();
                $sp_status="Pending";
                $Sposnor_cnt =0;
                $total_get =0;
                $total_profit= 0;
              }
            //  $percent = 5;
           
             if($sp_status=="Active")
               {  
            
                // $pp = $amount*$percent;
              $pp=1000;
              
              }else
              {
                $pp=0;
              }               
             
              
              $user_mid = @$Sposnor_status->id;
              //echo $user_id;
             //die;
              $idate = date("Y-m-d");
        
             
              $spid = @$Sposnor_status->id;
           
             
              $user_id_fk=$sponsor;
              //print_r($user_id_fk);die;
             // echo $cnt." ".$spid." ".$pp."<br>";

             $max_income=$total_get;
             $n_m_t = $max_income - $total_profit;
             // dd($total_received);
             


              if($spid>0 && $pp>0){               
                 $data = [
                'user_id' => $user_mid,
                'user_id_fk' =>$Sposnor_status->username,
                'amt' => $amt,
                'comm' => $pp,
                'remarks' => 'Referral Income',
                'level' => $cnt,
                'rname' => $rname,
                'fullname' => $fullname,
                'ttime' => Date("Y-m-d"),
                
            ];
            $user_data =  Income::Create($data);
           
            // add_level_income($user_mid,$pp);
       }


return true;
}





?>
