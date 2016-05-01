navbar

.internal--page__wrapper
  .container.swap-form__wrapper
    .row
      .col-md-10.col-md-offset-1.swap-form
        h1.text-center New Opportunity
        form.form-horizontal.swap-form
          #pizza-time
            .col-md-12
              .panel.panel-default
                .panel-heading Opportunity Details
                .panel-body
                  input.form-control(type='text', ng-model="opportunityContract.opportunityName")
                  input.form-control(type='text', ng-model="opportunityContract.opportunityOwner")
                  input.form-control(type='text', ng-model="opportunityContract.type")
                  input.form-control(type='text', ng-model="opportunityContract.industry")
                  input.form-control(type='text', ng-model="opportunityContract.customerRating")
                  input.form-control(type='text', ng-model="opportunityContract.status")
                  input.form-control(type='text', ng-model="opportunityContract.closedDate")
                  input.form-control(type='text', ng-model="opportunityContract.createdDate")
  
    .row
      .col-md-6.col-md-offset-3
        .btn.btn-primary.btn-block(ng-click="submit()") Submit 

.modal.fade#mining-transaction
  .modal-dialog
    .modal-content
      .modal-header
        h4.modal-title  Creating Opportunity...
      .modal-body
