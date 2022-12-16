import { GetArticleList, GetTableDataList } from '@/apis'
import Table, { Headers, type HandleFunc } from '@/components/Table'
import SvgIcon from '@/components/SvgIcon/index.vue'
import { mspHeaders } from './constant'
import './index'
export default defineComponent({
  setup () {
    const state = reactive<Service.ArticleListRes & Service.TableDataRes>({
      articleList: [],
      tableList: []
    })
    const router = useRouter()
    const handleClick: HandleFunc<Service.ArticleItem> = ({ row }): void => {
      void router.push(`/order/detail?id=${row.id}`)
    }
    const headers = computed(() => mspHeaders({ handleClick })) as import('vue').ComputedRef<Array<Headers<unknown>>>
    onMounted(async () => {
      const [r, d] = [await GetArticleList(), await GetTableDataList()]
      state.articleList = r.data.articleList
      state.tableList = d.data.tableList
    })
    return () => (
      <div>
        <SvgIcon {...{ name: 'test' }} />
        <Table data={state.articleList} headers={headers.value}></Table>
      </div>
    )
  }
})
