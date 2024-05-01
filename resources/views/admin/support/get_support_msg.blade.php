        <!--**********************************
                        Content body start
        ***********************************-->
        <div class="content-body">
            <div class="container-fluid">

                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="javascript:void(0)">Support</a></li>
                        <li class="breadcrumb-item"><a href="javascript:void(0)">Support Message</a></li>
                    </ol>
                </div>
                <!-- row -->


                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Support Message</h4>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table id="example" class="display" style="min-width: 845px">
                                        <?php if(is_array($open_ticket_msg) || is_object($open_ticket_msg)){ ?>
                                        <?php $count = 0; ?>
                                        <?php foreach ($open_ticket_msg as $item): ?>
                                        <div class="row">
                                            <?php
                                            if ($item->reply_by == 'user') {
                                                echo "<div class='col-md-2 col-sm-2 col-xs-2'></div>";
                                            }
                                            
                                            ?>

                                            <div class="col-md-12">
                                                <div class="box">
                                                
                                                        <!-- /.box-header -->
                                                     
                                                            <div class="card-header card-header-icon"
                                                                data-background-color="rose"
                                                                style="paint-order: 20px; padding-right: 20px;">
                                                                <h4 class="card-title"><?= $item->category ?>
                                                                    (<?= $item->gen_date ?>)</h4>
                                                            </div>
                                                            <div class="clearfix"></div>
                                                            <br>
                                                            <div class="row">
                                                                <div class="col-md-12">
                                                                    <p class="comp_bank_p"><?= $item->msg ?></p><br>
                                                                    <p class="text-right" style="    text-align: right;">
                                                                        <?= $item->reply_by == 'admin' ? 'Admin' : 'User' ?>
                                                                    </p>
                                                                </div>
                                                            </div>
                                                      
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <!-- /.box-body -->

                                        <?php endforeach; ?>
                                        <?php } ?>


                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
        <!--**********************************
            Content body end
        ***********************************-->
