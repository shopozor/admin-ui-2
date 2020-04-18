<template>
  <div>
      <q-table
        separator="cell"
        title="Orders Inbox"
        :data="orders"
        :columns="columns"
        :row-key="row => row.id"
        :pagination.sync="pagination"
        selection="multiple"
        :selected.sync="selected"
        :selected-rows-label="getSelectedString"
      />

    <h5>List View</h5>
    <q-list>
      <q-item v-for="order in orders" :key="order.id">
        <q-item-section>
        {{ order }}
        </q-item-section>
        </q-item>
    </q-list>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import { date } from 'quasar'

const LIST_ORDERS_QUERY = gql`
  query basketsListOrders {
    orders: basket_orders {
      id
      basketType: basket_type
      email
      firstName: first_name
      lastName: last_name
      phone
      street
      city
      zip
      status
      createdAt: created_at
      needCondiments: need_condiments
      comments
      deliveredAt: delivered_at
      paiedAmount: paied_amount
    }
  }
`

export default {
  name: 'BasketOrdersList',
  data () {
    return {
      orders: [],
      selected: [],
      pagination: {
        rowsPerPage: 30
      },
      columns: []

    }
  },
  apollo: {
    orders: {
      query: LIST_ORDERS_QUERY,
      pollInterval: 5000
    }
  },
  computed: {

  },
  mounted () {
    this.columns = [
      {
        name: 'name',
        align: 'left',
        label: 'Zip code',
        field: ({ firstName, lastName }) =>
              `${firstName} ${lastName}`,
        sortable: true
      },
      {
        name: 'email',
        align: 'left',
        label: 'EMail',
        field: 'email',
        sortable: true
      },
      {
        name: 'street',
        align: 'left',
        label: 'Street',
        field: 'street',
        sortable: true
      },
      {
        name: 'zip',
        align: 'left',
        label: 'Zip code',
        field: 'zip',
        sortable: true
      },
      {
        name: 'city',
        align: 'left',
        label: 'City',
        field: 'city',
        sortable: true
      },
      {
        name: 'phone',
        align: 'left',
        label: 'Phone',
        field: 'phone',
        sortable: true
      },
      {
        name: 'basketType',
        align: 'left',
        label: 'Basket Type',
        field: ({ basketType }) => this.$shopozor.basketTypes[basketType],
        sortable: true
      },
      {
        name: 'needCondiments',
        align: 'left',
        label: 'Need condiments',
        field: 'needCondiments',
        sortable: true
      },
      {
        name: 'createdAt',
        align: 'left',
        label: 'Order timestamp',
        field: ({ createdAt }) => date.formatDate(createdAt, 'ddd. DD.MM.YYYY HH:mm'),
        sortable: true
      },
      {
        name: 'status',
        align: 'left',
        label: 'Status',
        field: ({ status }) => this.$shopozor.deliveryStatusOptions[status],
        sortable: true
      }
    ]
  },
  methods: {
    getSelectedString () {
      return this.selected.length === 0
        ? ''
        : `${this.selected.length} record${
            this.selected.length > 1 ? 's' : ''
          } selected of ${this.data.length}`
    }

  }
}
</script>
